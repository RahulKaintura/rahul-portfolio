import { FiArrowUpRight } from 'react-icons/fi';
export default function ProjectCard({project:p}) {
 return <article className="project"><div className="project-top"><span className="eyebrow">{p.category} project</span><span className="project-index">/{p.id}</span></div><h3>{p.title}</h3><p>{p.description}</p>{p.details&&<ul>{p.details.map(detail=><li key={detail}>{detail}</li>)}</ul>}<div className="tags">{p.stack.map(item=><span key={item}>{item}</span>)}</div><div className="project-links">{p.live&&<a href={p.live} target="_blank" rel="noreferrer">Live demo <FiArrowUpRight/></a>}{p.repo&&<a href={p.repo} target="_blank" rel="noreferrer">Source code <FiArrowUpRight/></a>}</div></article>;
}
