import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg';
import Api from '../../services/api';

function ProfileRegister() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    const history = useHistory();

    function AddScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: scheduleItems.length, from: '', to: '' }
        ]);
    }

    function createClass(e: FormEvent) {
        e.preventDefault();

        const req = {
            name, avatar, whatsapp, bio, subject,
            cost: Number(cost),
            schedule: scheduleItems
        }

        Api.post('/classes', req)
            .then(res => {
                alert('cadastro realizado com sucesso!');

                history.push('/');
            })
            .catch(err => {
                alert('Erro de cadastro');
            });
    }

    function setScheduleItemValue(index: number, field: string, value: string) {
        const updateArray = scheduleItems.map((item, i) => {
            if (index === i) {
                return { ...item, [field]: value }
            }
            return item;
        });

        setScheduleItems(updateArray);
    }

    return (
        <div id='page-profile-form' className='container'>
            <Header
                title="Que incrível que voce quer fazer parte do nosso time"
                description="O primeiro passo e preencher esse formulario de inscrição"
            />
            <main>
                <form onSubmit={createClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input name='name' label='Nome Completo' value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Input name='avatar' label='Avatar' value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                        <Input
                            name='whatsApp'
                            label='WhatsApp'
                            type='number'
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre Aula</legend>
                        <Select
                            name='subject'
                            label='Máteria'
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', text: 'Artes' },
                                { value: 'Programacao', text: 'Programação' }
                            ]}
                        />
                        <Input
                            name='cost'
                            label='Valor por Hora'
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                        <Textarea
                            name='bio'
                            label='Biografia'
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type='button' onClick={AddScheduleItem}>
                                + Novo Horário
                        </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name='week_day'
                                        label='Semana'
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                        name='from'
                                        label='das'
                                        type='time'
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        name='to'
                                        label='Até'
                                        type='time'
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type='submit'>Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}
export default ProfileRegister;