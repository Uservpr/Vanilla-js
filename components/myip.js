async function Myip() {
  // Ambil IP dari API
  const response = await fetch("https://api.my-ip.io/v2/ip.json");
  const data = await response.json();

  // Return HTML dengan data IP
  return `
    <div>
      <p><b>success</b>: ${data.success}</p>
      <p><b>ip</b>: ${data.ip}</p>
      <p><b>type</b>: ${data.type}</p>
      <p><b>Countrycode</b>: ${data.country.code}</p>
      <p><b>Country name</b>: ${data.country.name}</p>
      <p><b>Region name</b>: ${data.region}</p>
      <p><b>City name</b>: ${data.city}</p>
      <p><b>Location name</b>: lat: ${data.location.lat}, long: ${data.location.lon}</p>
      <p><b>Time zone</b>: ${data.timeZone}</p>
      <p><b>Time zone</b>: ${data.timeZone}</p>
      <p><b>asn number</b>: ${data.asn.number}</p>
      <p><b>asn name</b>: ${data.asn.name}</p>
      <p><b>asn network</b>: ${data.asn.network}</p>
    </div>
  `;
}

export default Myip;