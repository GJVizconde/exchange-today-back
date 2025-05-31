import axios, { AxiosInstance } from 'axios';
import { HttAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      console.error('[AxiosAdapter][get] Error al hacer GET a', url, error);
      throw new Error('Error en petición HTTP (GET). Revisa los logs.');
    }
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    try {
      const { data } = await this.axios.post<T>(url, body);
      return data;
    } catch (error) {
      console.error('[AxiosAdapter][post] Error al hacer POST a', url, error);
      throw new Error('Error en petición HTTP (POST). Revisa los logs.');
    }
  }
}
