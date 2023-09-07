const CoreValues = () => {

    const values =[
        {
            'title': 'Maximize energy efficiency and sustainability',
            'description':'Through smarter systems and real time, data-driven decisions.'
        },
        {
            'title': 'Optimize asset availability and performance',
            'description':'Through predictive analytics and proactive maintenance.'
        },
        {
            'title': 'Foster open innovation and interoperability',
            'description':'Through development and partnerships with leading standards organization.'
        },
        {
            'title': 'Enable smart productive, and profitable operations',
            'description':'Through reduction of waste and downtime.'
        },
        {
            'title': 'Provide mobile insight and proactive risk mitigation',
            'description':'Through simulation, situation awareness and digitalization'
        },
        {
            'title': 'Data visualization',
            'description':'Large amounts of information are collected, sorted, condensed and presented in a data visualization.'
        },
    ]
    return ( 
        <div>
            <h2 className="font-semibold text-center text-vekin">CORE VALUE</h2>

            <div className="grid grid-cols-1 gap-16 mt-8 md:grid-cols-2 lg:grid-cols-3">
                {values?.map(({title, description})=>(
                    <div key={title} >
                        <h3 className="mb-4 text-3xl tracking-tighter text-vekin-green-80 ">{title}</h3>
                        <p className="w-full pl-2 border-l-2 border-vekin project-description ">{description}</p>
                    </div>
                ))}
                
            </div>

            
        </div>
     );
}
 
export default CoreValues;