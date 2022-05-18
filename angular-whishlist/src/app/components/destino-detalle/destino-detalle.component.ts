import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinoViaje } from '../../models/destino-viaje.model';
import { DestinosApiClient } from '../../models/destinos-api-client.model';

/*class DestinosApiClientViejo{
  getById(id: string): DestinoViaje{
    console.log('llamando a la clase vieja!');
    return new DestinoViaje("","");
  }
}

interface AppConfig {
  apiEndPoint: string;
}

const APP_CONFIG_VALUE: AppConfig = {
  apiEndPoint: 'mi_api.com'
};

const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

@Injectable()
class DestinosApiClientDecorated extends DestinosApiClient {

  constructor(@Inject(APP_CONFIG) private config: AppConfig, store: Store<AppState>) {
    super(store);
  }

  getById(id: string): DestinoViaje {
    console.log('llamando por la clase decorada!');
    console.log('config: ' + this.config.apiEndPoint);
    return super.getById(id);
  }
}*/

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.css'],
  providers: [
    DestinosApiClient
    /*{ provide: APP_CONFIG, useValue: APP_CONFIG_VALUE },
    { provide: DestinosApiClient, useClass: DestinosApiClientDecorated },
    { provide: DestinosApiClientViejo, useExisting: DestinosApiClient }*/
  ]
})
export class DestinoDetalleComponent implements OnInit {

  destino: DestinoViaje = new DestinoViaje("","");

  constructor(private route: ActivatedRoute, private destinosApiClient: DestinosApiClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.destinosApiClient.getById(id + '');
  }

}
