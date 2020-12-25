export const addBoat = data => 
  fetch('/boats', {
    body: JSON.stringify({ boat: data} ),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST' 
  })
    .then(res => res.json()); // returns new boat

export const deleteBoat = boatId => 
  fetch(`/boats/${boatId}`, {
    method: 'DELETE'
  });

export const getBoats = () => fetch('/boats')
  .then(res => res.json()); // returns boats

export const getDocks = () => fetch('/docks')
  .then( res => res.json()); // returns docks

export const updateBoat = ({boatId, dockId}) => 
  fetch(`/boats/${boatId}`, {
    body: JSON.stringify({ boat: { dock_id: dockId }}), // only updates dock_id
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT'
  })
    .then(res => res.json()); // returns updated boat