export const addBoat = data => 
  fetch('/boats', {
    body: JSON.stringify({ boat: data} ),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST' 
  })
    .then(res => res.json());

export const getBoats = () => fetch('/boats')
  .then(res => res.json());

export const getDocks = () => fetch('/docks')
  .then( res => res.json());