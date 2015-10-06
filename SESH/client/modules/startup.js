let startup = () => {
  // client
  GoogleMaps.load({
    key: 'AIzaSyDXDuya4wzx3H7X4HredCJLtytr6it_dUk',
    libraries: []  // also accepts an array if you need more than one
  });

};

Modules.client.startup = startup;
