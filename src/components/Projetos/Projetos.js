import { useEffect, useState } from "react"

const Projetos = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/leocarvalh0/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setRepos(resJson);
            }, 3000)
        })
    })

    return (
        <div className="container">
            <ul>
                {repos.map(({ id, name, language, html_url }) => (
                    <li key={id}>
                        <div>
                            <b>Nome:</b>
                            {name}
                        </div>
                        <div>
                            <b>Linguagem:</b>
                            {language}
                        </div>
                        <a target="_blank" href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projetos