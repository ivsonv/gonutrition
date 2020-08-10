import React from 'react';

import Header from '../../components/Header';
import ProfileItem from '../../components/ProfileItem';
import Select from '../../components/Select';
import Input from '../../components/Input';

import './styles.css';

function ProfileList() {
    return (
        <div id="page-profile-list" className="container">
            <Header title="Veja abaixo nossos profissionais disponíveis">
                <form id="profile-search">
                    <Select
                        name='subject'
                        label='Máteria'
                        options={[
                            { value: 'Artes', text: 'Artes' },
                            { value: 'Programacao', text: 'Programação' }
                        ]}
                    />
                    <Select
                        name='week_day'
                        label='Semana'
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
                    <Input name='time' label='Hora' type='time' />
                </form>
            </Header>
            <main>
                <ProfileItem />
                <ProfileItem />
                <ProfileItem />
                <ProfileItem />
                <ProfileItem />
                <ProfileItem />
                <ProfileItem />
            </main>
        </div>
    );
}

export default ProfileList;