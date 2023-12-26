import React, { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import {useNavigate, useParams} from "react-router-dom"
import axios from 'axios'


const EditData = () => {
    const[nama, setNama] =useState("")
    const[email, setEmail] =useState("")
    const[alamat, setAlamat] =useState("")
    const[nim, setNim] =useState("")
    const[jurusan, setJurusan] =useState("")
    const[status, setStatus] =useState("Aktif")
    const[fakultas, setFakultas] =useState("")
    const navigate= useNavigate();
    const { id } = useParams();

    

    const getUserById = async () =>{
        try {
            const responnse = await axios.get(`https://thunderous-florentine-f88db8.netlify.app/.netlify/functions/api/user/${id}`)
            setNama(responnse.data.nama)
            setEmail(responnse.data.email)
            setNim(responnse.data.nim)
            setJurusan(responnse.data.jurusan)
            setFakultas(responnse.data.fakultas)
            setAlamat(responnse.data.alamat)
            setStatus(responnse.data.status)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        getUserById();
    },[])

    const editData = async(e) =>{
        e.preventDefault()
        try {
            await axios.patch(`https://thunderous-florentine-f88db8.netlify.app/.netlify/functions/api/user/${id}`,{
                alamat,
                email,
                jurusan,
                nama,
                nim,
                fakultas,
                status
            })
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={editData}>
        <div>
            <div>
                <label class='label'>Nama</label>
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
                <label class='label'>Nim</label>
            </div>
            <div>
                <input className='input' type='tel'placeholder='12xxxxxxx' value={nim} onChange={(e) => setNim(e.target.value)}/>
            </div>
        </div>
        <div>
            <div>
                <label class='label'>jurusan</label>
            </div>
            <div>
                <input className='input' type='tel'placeholder='e.g Teknik Informatika' value={jurusan} onChange={(e) => setJurusan(e.target.value)}/>
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
            <div>
                <label className='label'>fakultas</label>
            </div>
            <div>
                <input className='input' type='text' placeholder='e.g sains xxxxx' value={fakultas} onChange={(e) => setFakultas(e.target.value)}/>
            </div>
        </div>
        <div>
            <button className='button is-black' type='submit'>Update</button>
        </div>
        </form>
    </div>
  )
}
export default EditData
