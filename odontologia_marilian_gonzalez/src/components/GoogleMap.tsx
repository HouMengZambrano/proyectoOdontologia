import "../sytles/Googlemap.css"

const GoogleMap = () => {
  return (
    <div className="google_map_container">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.8332853989277!2d-58.46247482336906!3d-34.557776255074835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb42b00e3d659%3A0xa2603d7b95209ad8!2sAv.%20Monroe%202341%2C%20C1428%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1719892406816!5m2!1ses-419!2sar" 
      style={{ border: 0 }}
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  );
};

export default GoogleMap;
