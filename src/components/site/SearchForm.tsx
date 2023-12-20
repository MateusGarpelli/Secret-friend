"use client"

import { escapeCpf } from "@/utils/escapeCpf";
import { useState } from "react"

type Props = {
    onSearchButton: (cpf: string) => void,
    loading:boolean
}

export const SearchForm = ({ onSearchButton,loading }: Props) => {

    const [cpfInput, setCpfInput] = useState("");

    return (
        <div>
            <p className="mb-3 text-xl">Qual é o seu CPF?</p>
            <input type="text" className="w-full p-3 bg-white text-black text-center text-4xl outline-none rounded-lg disabled:opacity-20"
             autoFocus
              inputMode="numeric"
               placeholder="Digite seu CPF"
               onChange={e => setCpfInput (escapeCpf(e.target.value))}
                disabled={loading}
               />
            <button className="w-full p-3 mt-3 rounded-lg bg-blue-800 text-white text-lg border-b-4 active:border-t-4 border-blue-600 active:border-b-0 active:border-t-blue-600 disabled:opacity-20"
                onClick={()=> onSearchButton (cpfInput)}
                disabled={loading}
            >{loading ? "Buscando..." : "Entrar"}</button>
        </div>
    )
}

