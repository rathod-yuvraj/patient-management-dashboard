function VitalCard({
  title,
  value,
  status,
  image
}) {

  return (

    <div className="vital-card">

      <img src={image} alt="" />

      <h3>{title}</h3>

      <h1>{value}</h1>

      <p>{status}</p>

    </div>

  );

}

export default VitalCard;