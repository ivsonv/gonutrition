import React from 'react';

import './styles.css';

export interface Profiler {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: number;
}

interface ProfilerItemProps {
    profiler: Profiler;
}

const ProfileItem: React.FC<ProfilerItemProps> = ({ profiler }: ProfilerItemProps) => {
    return (
        <article className="profile-item">
            <header>
                <img src={profiler.avatar} alt={profiler.name} />
                <div>
                    <strong>{profiler.name}</strong>
                    <span>{profiler.subject}</span>
                </div>
            </header>
            <p>
                {profiler.bio}
            </p>
            <footer>
                <p>
                    Preço/Hora
                <strong>R$ {profiler.cost}</strong>
                </p>
                <button type="button">
                    Marcar Horário
                </button>
                {/* <a 
                    target="_blank" 
                    onClick={createNewConnection} 
                    href={`https://wa.me/${teacher.whatsapp}`} 
                    type="button"
                    ></a> 
                */}
            </footer>
        </article>
    );
}

export default ProfileItem;