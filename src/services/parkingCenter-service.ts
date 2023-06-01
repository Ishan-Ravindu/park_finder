import create from './http-service';

export interface ParkingCenter {
  id: number;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  open_status: 'open' | 'closed';
  image_url: string;
}

export interface ParkingCenterRequestBody {
  latitude: number;
  longitude: number;
}

export default create('/parking-center');
