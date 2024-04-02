import React from 'react';
import styles from './styles.module.css';

type TeamMember = {
  name: string;
  pronouns: string;
  photo: string;
  role: string;
  description: string;
  loves: string[];
  hates: string[];
};

const MemberList: TeamMember[] = [
  {
    name: 'Bernahrd Bartmann',
    pronouns: '',
    photo: '/img/Berni.jpg',
    role: 'Docusaurus Developer',
    description: 'Bernhard is doing the Digital Rotational Program of BASF.',
    loves: ['BVB', 'Docusaurus', 'Maestra'],
    hates: ['Schalke04']
  },
];

function TeamMember({name, pronouns, photo, description, role, loves, hates}: TeamMember) {
  return (
    <div className={styles.teamMember}>
      <img src={photo} alt="Preview" className={styles.photo}/>
      <div>
        <h3 className={styles.name}>{name}{(pronouns) && <span> ({pronouns})</span>}</h3> 
        <div className={styles.role}><i>{role}</i></div>
        <p>
          <div className={styles.description}>{description}</div>
          {(loves.length > 0) && <span>❤️ Loves: {loves.join(", ")}<br /></span>}
          {(hates.length > 0) && <span>😠 Hates: {hates.join(", ")}<br /></span>}
        </p>
      </div>
    </div>
  );
}

export default function TeamMembers(): JSX.Element {
  return (
    <section className={styles.teamMembers}>
      <div className="container">
        <div className="row">
          {MemberList.map((props, idx) => (
            <TeamMember key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
