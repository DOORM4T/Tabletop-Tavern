import React, { useState } from 'react'

export default function NewCharacter(props) {
  // const [member, setMember] = useState({
  //   name: "Stan Dadaelar",
  //   job: "Jack",
  //   descriptors: ['Doomed', 'Foolish'],
  //   foci: ['Works miracles', 'Works the back alleys'],
  //   xp: 0,
  //   effort: 1,
  //   mightPool: 10,
  //   speedPool: 10,
  //   intPool: 12,
  //   mightEdge: 0,
  //   speedEdge: 1,
  //   intEdge: 0,
  // });

  const [name, setName] = useState();
  const [job, setJob] = useState();
  const [descriptors, setDescriptors] = useState();
  const [foci, setFoci] = useState();
  const [xp, setXP] = useState(0);
  const [effort, setEffort] = useState(1);
  const [mightPool, setMightPool] = useState();
  const [speedPool, setSpeedPool] = useState();
  const [intPool, setIntPool] = useState();
  const [mightEdge, setMightEdge] = useState();
  const [speedEdge, setSpeedEdge] = useState();
  const [intEdge, setIntEdge] = useState();

  const handleSubmit = () => {
    const newMember = {
      name,
      job,
      descriptors,
      foci,
      xp: parseInt(xp),
      effort: parseInt(effort),
      mightPool: parseInt(mightPool),
      speedPool: parseInt(speedPool),
      intPool: parseInt(intPool),
      mightEdge: parseInt(mightEdge),
      speedEdge: parseInt(speedEdge),
      intEdge: parseInt(intEdge),
    };
    // for (let attr in newMember) {
    //   if (newMember.attr === null || newMember.attr === undefined)
    //     return;
    // }
    props.addMember(newMember);
  }

  return (
    <>
      <a href="#newMemberModal" className="mt-1 btn waves-effect waves-light modal-trigger">New Member</a>
      <div id="newMemberModal" className="modal">
        <h3 className="center">New Party Member</h3>
        <div className="row">
          <form className="col s12">
            <div className="row">
              {/* Member Name */}
              <div className="col s9 input-field">
                <input required id="name" type="text" onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor="name">Name</label>
              </div>
              {/* Job */}
              <div className="col s3 input-field">
                <select className="select" id="job" onChange={(e) => setJob(e.target.value)}>
                  <option value="Glaive">Glaive</option>
                  <option value="Nano">Nano</option>
                  <option value="Jack">Jack</option>
                </select>
                {/* <input required id="job" type="text" onChange={(e) => setJob(e.target.value)}></input> */}
                <label htmlFor="job">Job</label>
              </div>
            </div>
            {/* Descriptors */}
            <div className="input-field">
              <input required id="descriptors" type="text" onChange={(e) => setDescriptors(e.target.value)}></input>
              <label htmlFor="descriptors">Descriptor(s)</label>
            </div>
            {/* Foci */}
            <div className="input-field">
              <input required id="foci" type="text" onChange={(e) => setFoci(e.target.value)}></input>
              <label htmlFor="foci">Foci</label>
            </div>
            <div className="row">
              {/* xp */}
              <div className="col s6 input-field">
                <input required id="xp" type="text" onChange={(e) => setXP(e.target.value)}></input>
                <label htmlFor="xp">XP</label>
              </div>
              {/* effort */}
              <div className="col s6 input-field">
                <input required id="effort" type="text" onChange={(e) => setEffort(e.target.value)}></input>
                <label htmlFor="effort">Effort</label>
              </div>
            </div>
            <div className="row">
              {/* Might Pool */}
              <div className="col s4 input-field">
                <input required id="mightPool" type="number" onChange={(e) => setMightPool(e.target.value)}></input>
                <label htmlFor="mightPool">Might Pool</label>
              </div>
              {/* Speed Pool */}
              <div className="col s4 input-field">
                <input required id="speedPool" type="number" onChange={(e) => setSpeedPool(e.target.value)}></input>
                <label htmlFor="speedPool">Speed Pool</label>
              </div>
              {/* Intellect Pool */}
              <div className="col s4 input-field">
                <input required id="intPool" type="number" onChange={(e) => setIntPool(e.target.value)}></input>
                <label htmlFor="intPool">Int Pool</label>
              </div>
            </div>
            <div className="row">
              {/* Might Edge */}
              <div className="col s4 input-field">
                <input required id="mightEdge" type="number" onChange={(e) => setMightEdge(e.target.value)}></input>
                <label htmlFor="mightEdge">Might Edge</label>
              </div>
              {/* Speed Edge */}
              <div className="col s4 input-field">
                <input required id="speedEdge" type="number" onChange={(e) => setSpeedEdge(e.target.value)}></input>
                <label htmlFor="speedEdge">Speed Edge</label>
              </div>
              {/* Intellect Edge */}
              <div className="col s4 input-field">
                <input required id="intEdge" type="number" onChange={(e) => setIntEdge(e.target.value)}></input>
                <label htmlFor="intEdge">Int Edge</label>
              </div>
            </div>



            <button className="modal-close right mt-1 mb-1 btn light-blue waves-effect waves-light"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }
              }>
              Add Member
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
