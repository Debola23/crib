import Styles from './Agents.module.css'

const agent = [
  {
    id: 1,
    name: "Koi Smith",
    pi: "position:",
    position: "Senior Agent",
    sa:"Service Area:",
    area: "Lekki, Ajah, VI",
    sp:"Specialties:",
    spec:"Luxury Homes",
    image: "/Images/profilepic2.jpg",
  },
  {
    id: 2,
    name: "David Lee",
    pi: "position:",
    position: "Property Consultant",
    sa:"Service Area:",
    area: "Lekki, Ajah, VI",
    sp:"Specialties:",
    spec:"Luxury Homes",
    image: "/Images/profilepic4.jpg",
  },
  {
    id: 3,
    name: "Amanda Chen",
    pi: "position:",
    position: "Leasing Specialist",
    sa:"Service Area:",
    area: "Lekki, Ajah, VI",
    sp:"Specialties:",
    spec:"Luxury Homes",
    image: "/Images/profilepic1.jpg",
  },
    {
    id: 4,
    name: "Zach Kel",
    pi: "position:",
    position: "Leasing Specialist",
    sa:"Service Area:",
    area: "Lekki, Ajah, VI",
    sp:"Specialties:",
    spec:"Luxury Homes",
    image: "/Images/profilepic3.jpg",
  },
{
    id: 5,
    name: "Mark Brayn",
    pi: "position:",
    position: "Leasing Specialist",
    sa:"Service Area:",
    area: "Lekki, Ajah, VI",
    sp:"Specialties:",
    spec:"Luxury Homes",
    image: "/Images/profilepic5.jpg",
  },
    {
    id: 6,
    name: "Shawn White",
    pi: "Position:",
    position: "Leasing Specialist",
    sa:"Service Area:",
    area: "Lekki, Ajah, VI",
    sp:"Specialties:",
    spec:"Luxury Homes",
    image: "/Images/profilepic.jpg",
  },
];

export const Agents = () => {
  return (
    <section className={Styles.agent} id="team">
        <div className='text-center mb-5'>
            <h5 className='mb-[2rem]' id={Styles.h5}>Agents</h5>
            <div id={Styles.sh}>Our Agents</div>
        </div>
        <div className='container'>
            <div className='row '>
                <div id={Styles.row} className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {agent.map((agent) => (
                    <div
                        key={agent.id}
                        className="bg-white rounded-2xl mb-[4rem]  overflow-hidden shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <img src={agent.image} alt={agent.name} className="w-full h-64 object-cover" id={Styles.img} />

                        <div className="p-4 text-center">
                          <h3 className="text-xl font-semibold text-gray-800 mb-1" id={Styles.t1}>{agent.name}</h3>
                            <div className={Styles.pb1}>
                              <p className="text-sm text-gray-500 " id={Styles.t2}>{agent.pi}</p>
                              <p className="text-sm text-gray-500 " id={Styles.t2}>{agent.position}</p>
                            </div>
                            <div className={Styles.pb2}>
                              <p className="text-sm text-gray-500 " id={Styles.t2}>{agent.sa}</p>
                              <p className="text-sm text-gray-500 " id={Styles.t2}>{agent.area}</p>
                            </div>
                            <div className={Styles.pb2}>
                              <p className="text-sm text-gray-500 " id={Styles.t2}>{agent.sp}</p>
                              <p className="text-sm text-gray-500 " id={Styles.t2}>{agent.spec}</p>
                            </div>
                          <div className={Styles.btnWrap}>
                              <a href='' id={Styles.aa} className="transition-colors duration-200">
                                Message
                              </a>
                              <a href='' id={Styles.aa} className="transition-colors duration-200">
                                Connect
                              </a>
                          </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
