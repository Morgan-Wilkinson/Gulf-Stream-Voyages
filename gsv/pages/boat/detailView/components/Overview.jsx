function Overview({ boat }) {
  if (boat == null) return;
  return (
    <div className="row x-gap-80 y-gap-40 pt-40">
      <div className="col-12">
        <h3 className="text-22 fw-500">Overview</h3>
        <p className="text-dark-1 text-15 mt-20">{boat?.description}</p>
      </div>
      {/* overview */}

      <div className="col-12">
        <h5 className="text-16 fw-500">About</h5>
        <ul className="list-disc text-15 mt-10">
          <li>Passengers: 4,266 | Crew: 1,733</li>
          <li>Passengers to crew: 2.46:1</li>
          <li>Launched: 2015</li>
        </ul>
      </div>
      {/* about */}

      <div className="col-auto">
        <h5 className="d-flex items-center text-16 fw-500">
          <i className="icon-nearby text-20 mr-10" />
          Departs from:
        </h5>
        <ul className="list-disc text-15 mt-10">
          <li>Barcelona</li>
          <li>Miami</li>
          <li>New York (Manhattan)</li>
          <li>Port Canaveral (Orlando)</li>
          <li>Rome (Civitavecchia)</li>
        </ul>
      </div>
      {/*   Departs from: */}

      <div className="col-auto">
        <h5 className="d-flex items-center text-16 fw-500">
          <i className="icon-nearby text-20 mr-10" />
          Departs from:
        </h5>
        <ul className="list-disc text-15 mt-10">
          <li>Barcelona</li>
          <li>Miami</li>
          <li>New York (Manhattan)</li>
          <li>Port Canaveral (Orlando)</li>
          <li>Rome (Civitavecchia)</li>
        </ul>
      </div>
      {/*   Departs from: */}
    </div>
  );
}

export default Overview;
