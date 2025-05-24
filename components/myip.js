async function Myip() {
  try {
    const response = await fetch("https://api.my-ip.io/v2/ip.json");
    const data = await response.json();

    return `
      <div class="container my-5">
        <div class="card shadow p-4">
          <h4 class="mb-3">Your IP Information</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>IP</b>: ${data.ip}</li>
            <li class="list-group-item"><b>Type</b>: ${data.type}</li>
            <li class="list-group-item"><b>Country</b>: ${data.country.name} (${data.country.code})</li>
            <li class="list-group-item"><b>Region</b>: ${data.region}</li>
            <li class="list-group-item"><b>City</b>: ${data.city}</li>
            <li class="list-group-item"><b>Location</b>: Lat: ${data.location.lat}, Lon: ${data.location.lon}</li>
            <li class="list-group-item"><b>Time Zone</b>: ${data.timeZone}</li>
            <li class="list-group-item"><b>ASN Number</b>: ${data.asn.number}</li>
            <li class="list-group-item"><b>ASN Name</b>: ${data.asn.name}</li>
            <li class="list-group-item"><b>ASN Network</b>: ${data.asn.network}</li>
          </ul>
        </div>
      </div>
    `;
  } catch (err) {
    return `
      <div class="container my-5">
        <div class="alert alert-danger" role="alert">
          Gagal ambil data IP: ${err.message}
        </div>
      </div>
    `;
  }
}

export default Myip;