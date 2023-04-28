import { IoIosCloseCircle,  } from 'react-icons/io';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './colaborador.css'


const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    return (
    <div className="colaborador" key={colaborador.id}>
        <IoIosCloseCircle 
        size={35} 
        className="deletar" 
        onClick={() => aoDeletar(colaborador.id)} 
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                ? <AiFillHeart onClick={favoritar} size={25} color="#ff0000"/> 
                : <AiOutlineHeart onClick={favoritar} size={25}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador