import React, { ReactElement, useState, FormEvent } from 'react';

import Header from '../../components/Header';
import ProfileItem, { Profiler } from '../../components/ProfileItem';
import Select from '../../components/Select';
import Input from '../../components/Input';

import Api from '../../services/api';
import './styles.css';

function ProfileList(): ReactElement {
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [profiles, setProfiles] = useState([]);

    async function searchProfiles(e: FormEvent) {
        e.preventDefault();

        const response = await Api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            },
        });

        setProfiles(response.data);
    }
    return (
        <div id="page-profile-list" className="container">
            <Header title="Veja abaixo nossos profissionais disponíveis">
                <form id="profile-search" onSubmit={searchProfiles}>
                    <Select
                        name='subject'
                        label='Máteria'
                        onChange={e => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', text: 'Artes' },
                            { value: 'Programacao', text: 'Programação' }
                        ]}
                    />
                    <Select
                        name='week_day'
                        label='Semana'
                        onChange={e => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', text: 'Domingo' },
                            { value: '1', text: 'Segunda-feira' },
                            { value: '2', text: 'Terça-feira' },
                            { value: '3', text: 'Quarta-feira' },
                            { value: '4', text: 'Quinta-feira' },
                            { value: '5', text: 'Sexta-feira' },
                            { value: '6', text: 'Sabado' },
                        ]}
                    />
                    <Input
                        name='time'
                        label='Hora'
                        type='time'
                        onChange={e => {
                            setTime(e.target.value)
                        }}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </Header>
            <main>
                {profiles.map((_profile: Profiler) => {
                    return <ProfileItem key={_profile.id} profiler={_profile} />
                })}
            </main>
        </div>
    );
}

export default ProfileList;