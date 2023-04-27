import React, { useState } from 'react'

export default function App() {
  const emails = [
    {
      id: 1,
      title: 'Título do email 1',
      status: 0,
    },
    {
      id: 2,
      title: 'Título do email 2',
      status: 0,
    },
    {
      id: 3,
      title: 'Título do email 3',
      status: 0,
    },
  ]

  const [messages, setMessages] = useState({
    status: 0,
    messages,
  })

  const [status, setStatus] = useState(0)

  const handleClickLido = () => {
    setStatus({
      status: 1,
    })
  }

  const handleClickNaoLido = () => {
    setStatus({
      status: 0,
    })
  }

  return (
    <div>
      <header>
        TrybeMail
      </header>
      <section>
        <button >Marcar todos como lido</button>
        <button >Marcar todos como não lido</button>
      </section>
      <ul>
        {emails.map((element, index) => (
          <>
            <li>
              <p>
                {element.title}
              </p>
            </li>
            <button onClick={handleClickLido}>Lido</button>
            <button onClick={handleClickNaoLido}>Não lido</button>
          </>
        ))}
      </ul>
    </div>
  )
}
