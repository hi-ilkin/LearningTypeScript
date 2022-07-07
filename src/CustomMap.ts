interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private map: google.maps.Map;

  constructor(element: HTMLElement) {
    this.map = new google.maps.Map(element, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
  setMarker = (mappable: Mappable) => {
    const marker = new google.maps.Marker({
      map: this.map,
      position: mappable.location,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there'
      });

      infoWindow.open(this.map, marker);
    })
  };

  setLocation = (mappable: Mappable) => {
    this.map.setOptions({
      center: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
  };
}
