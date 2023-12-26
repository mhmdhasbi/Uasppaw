import React, { useState } from 'react'
import 'bulma/css/bulma.css'
import {useNavigate} from "react-router-dom"
import axios from 'axios'


const AddData = () => {
    const[nama, setNama] =useState("")
    const[email, setEmail] =useState("")
    const[alamat, setAlamat] =useState("")
    const[nim, setNim] =useState("")
    const[jurusan, setJurusan] =useState("")
    const[status, setStatus] =useState("Aktif")
    const[fakultas, setFakultas] =useState("")
    const navigate= useNavigate();
    const saveData = async(e) =>{
        e.preventDefault()
        try {
            await axios.post('https://thunderous-florentine-f88db8.netlify.app/.netlify/functions/api/user',{
                nama,
                nim,
                jurusan,
                fakultas,
                alamat,
                status,
                email
            })
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={saveData}>
        <div>
            <div>
                <label class='label'>nama</label>
            </div>
            <div>
                <input 
                className='input' 
                type='text' 
                placeholder='e.g Alexandra'
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                />
            </div>
        </div>
        <div>
            <div>
                <label class='label'>nim</label>
            </div>
            <div>
                <input className='input' type='tel'placeholder='121xxxxxxx' value={nim} onChange={(e) => setNim(e.target.value)}/>
            </div>
        </div>
        <div>
            <div>
                <label class='label'>Email</label>
            </div>
            <div>
                <input 
                className='input' 
                type='email' 
                placeholder='e.g xxx@xxx.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>
        <div>
            <div>
                <label class='label'>alamat</label>
            </div>
            <div>
                <input className='input'type='text' placeholder='e.g Jl.xxx Rtxx/Rwxx no.xxx kota xxxx' value={alamat} onChange={(e)=>setAlamat(e.target.value)}/>
            </div>
        </div>
        
        <div>
            <div>
                <label class='label'>fakultas</label>
            </div>
            <div>
                <input className='input' type='tel'placeholder='e.g sains dan teknologi' value={fakultas} onChange={(e) => setFakultas(e.target.value)}/>
            </div>
        </div>
        <div>
            <div>
                <label className='label'>Jurusan</label>
            </div>
            <div>
                <input className='input' type='text' placeholder='e.g Teknik xxxxx' value={jurusan} onChange={(e) => setJurusan(e.target.value)}/>
            </div>
        </div>
        
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Status</label>
            </div>
            <div class="field-body">
                <div class="field is-narrow">
                <div class="control">
                    <div class="select is-fullwidth">
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>Aktif</option>
                        <option>Non-Aktif</option>
                    </select>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        <div>
            <button className='button is-warning' type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}
export default AddData
