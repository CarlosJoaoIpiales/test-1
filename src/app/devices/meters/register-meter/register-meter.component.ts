import { Component, OnInit } from '@angular/core';

declare const google: any;

interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}

@Component({
    selector: 'app-register-meter',
    templateUrl: './register-meter.component.html',
    styleUrls: ['./register-meter.component.css']
})
export class RegisterMeterComponent implements OnInit {
    title = 'Registrar Medidor';

    // Define las coordenadas para las ciudades y provincias
    private locationData: { [key: string]: { lat: number, lng: number } } = {
        'Quito': { lat: -0.22985, lng: -78.52495 },
        'Guayaquil': { lat: -2.19643, lng: -79.92224 },
        'Pichincha': { lat: -0.22985, lng: -78.52495 }, 
        'Guayas': { lat: -2.19643, lng: -79.92224 },
    };

    constructor() { }

    ngOnInit() {
        var myLatlng = new google.maps.LatLng(-0.345845, -78.447684);
        var mapOptions = {
            zoom: 17,
            center: myLatlng,
            scrollwheel: true,
            styles: [ /* tus estilos aquí */ ]
        };
        
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!",
            draggable: true,
        });

        const latInput = document.getElementById('latInput') as HTMLInputElement;
        const lngInput = document.getElementById('lngInput') as HTMLInputElement;

        google.maps.event.addListener(marker, 'dragend', function(event) {
            latInput.value = event.latLng.lat().toFixed(6);
            lngInput.value = event.latLng.lng().toFixed(6);
        });

        latInput.addEventListener('input', () => this.updateMarkerPosition(marker, map, latInput, lngInput));
        lngInput.addEventListener('input', () => this.updateMarkerPosition(marker, map, latInput, lngInput));

        marker.setMap(map);

        const countrySelect = document.getElementById('countrySelect') as HTMLSelectElement;
        const provinceSelect = document.getElementById('provinceSelect') as HTMLSelectElement;
        const citySelect = document.getElementById('citySelect') as HTMLSelectElement;

        const showLocationButton = document.getElementById('showLocation') as HTMLButtonElement;
        showLocationButton.addEventListener('click', () => {
            const city = citySelect.value;

            if (this.locationData[city]) {
                const { lat, lng } = this.locationData[city];
                const newLatLng = new google.maps.LatLng(lat, lng);
                map.setCenter(newLatLng);
                marker.setPosition(newLatLng);
                latInput.value = lat.toFixed(6);
                lngInput.value = lng.toFixed(6);
            } else {
                console.error("Ubicación no encontrada para la ciudad seleccionada.");
            }
        });
    }

    private updateMarkerPosition(marker: any, map: any, latInput: HTMLInputElement, lngInput: HTMLInputElement) {
        const lat = parseFloat(latInput.value);
        const lng = parseFloat(lngInput.value);
        if (!isNaN(lat) && !isNaN(lng)) {
            const newLatLng = new google.maps.LatLng(lat, lng);
            marker.setPosition(newLatLng);
            map.setCenter(newLatLng);
        }
    }
}
