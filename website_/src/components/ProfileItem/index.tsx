import React from 'react';

import './styles.css';

function ProfileItem() {
    return (
        <article className="profile-item">
            <header>
                <img src="https://http2.mlstatic.com/foto-desenho-para-o-seu-perfil-das-redes-sociais-D_NQ_NP_614041-MLB27185740295_042018-O.jpg" alt="Foto perfil" />
                <div>
                    <strong>IVSON VITAL</strong>
                    <span>Nutrição esportiva, parenteal, crianças...</span>
                </div>
            </header>
            <p>
                aoisdoasjdosajidiasod a sodajsodiajs  paoskpjas  daosjdias dipasj iodaj sodija osdi aos dhoasu dho ashduo
            </p>
            <footer>
                <p>
                    Preço/Hora
                <strong>R$ 90,00</strong>
                </p>
                <button type="button">
                    Marcar Horário
            </button>
            </footer>
        </article>
    );
}

export default ProfileItem;