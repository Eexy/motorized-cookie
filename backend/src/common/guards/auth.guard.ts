import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '../../jwt/jwt.service';
import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { ClientsService } from '../../clients/clients.service';
import { z } from 'zod';

export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly clientService: ClientsService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('User not connected');
    }

    let decodedToken: JwtPayload | string = '';
    try {
      decodedToken = this.jwtService.decodeJwt(token);
    } catch (e) {
      throw new UnauthorizedException('User not connected');
    }

    const payloadSchema = z.object({
      sub: z.coerce.number(),
      email: z.string().trim().toLowerCase().email(),
    });

    const parsedPayloadRes = payloadSchema.safeParse(decodedToken);

    if (!parsedPayloadRes.success) {
      throw new UnauthorizedException('User not connected');
    }

    const client = await this.clientService.getClientById(
      parsedPayloadRes.data.sub,
    );

    if (!client) {
      throw new UnauthorizedException('User not connected');
    }

    request['user'] = client;

    return true;
  }

  private extractTokenFromHeader(req: Request) {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    if (!type || type !== 'Bearer') return null;

    if (!token) return null;

    return token;
  }
}
