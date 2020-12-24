export const addBoat = data => 
  fetch('/boats', {
    body: JSON.stringify({ boat: data} ),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST' 
  })
    .then(res => res.json());

export const deleteBoat = boatId => 
  fetch(`/boats/${boatId}`, {
    method: 'DELETE'
  });

export const getBoats = () => fetch('/boats')
  .then(res => res.json());

export const getDocks = () => fetch('/docks')
  .then( res => res.json());

export const updateBoat = ({boatId, dockId}) => 
  fetch(`/boats/${boatId}`, {
    body: JSON.stringify({ boat: { dock_id: dockId }}),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT'
  })
    .then(res => res.json());