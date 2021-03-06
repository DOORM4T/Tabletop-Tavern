import React from 'react'
import CharacterInfo from './CharacterInfo/CharacterInfo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Party(props) {
  return (
    <div className="party row mt-2">
      <TransitionGroup className="transition">
        {
          props.party.map((member, index) =>
            <CSSTransition
              key={index}
              timeout={100}
              classNames="member"
            >
              <div className="col s12 m12 l12 xl6" key={member.id}>
                <CharacterInfo
                  member={member}
                  index={index}
                  id={member.id}
                  name={member.name}
                  job={member.job}
                  descriptors={member.descriptors}
                  foci={member.foci}
                  level={member.level}
                  xp={member.xp}
                  effort={member.effort}
                  mightPool={member.mightPool}
                  speedPool={member.speedPool}
                  intPool={member.intPool}
                  mightDiff={member.mightDiff}
                  speedDiff={member.speedDiff}
                  intDiff={member.intDiff}
                  mightEdge={member.mightEdge}
                  speedEdge={member.speedEdge}
                  intEdge={member.intEdge}
                  showEdit={props.showEdit}
                  removeMember={props.removeMember}
                />
              </div>
            </CSSTransition>
          )
        }
      </TransitionGroup>

    </div >
  )
}
