import React from 'react'

function Prova() {
    return (
        <button
            onClick={async() => {
                const req = await fetch("https://api.brevo.com/v3/smtp/email", {
                    headers: {
                        "accept": "application/json",
                        "api-key": "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",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({
                        sender: {
                            name: "Davide Bebba",
                            email: "addisbebba@gmail.com"
                        },
                        to: [
                            {
                                email: "davidegiaco2002@gmail.com",
                                name: "Davide 2002"
                            }
                        ],
                        subject: "Email di prova qui",
                        htmlContent: "<html><head></head><body><p>CIAOOO STO TESTANDO</p></body></html>"
                    })
                })

                const res = await req.json()
                console.log(res)
            }}
        >
            CIAAAAO
        </button>
    )
}

export default Prova
