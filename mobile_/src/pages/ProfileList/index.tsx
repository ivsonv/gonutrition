import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';

import PageHeader from '../../components/Header';
import ProfileItem, { Profiler } from '../../components/ProfileItem';

import styles from './styles';

function ProfileList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('Programacao');
  const [week_day, setweek_day] = useState('1');
  const [time, setTime] = useState('11:00');

  const [profiles, setprofiles] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedprofiles = JSON.parse(response);
        const favoritedprofilesIds = favoritedprofiles.map((teacher: Profiler) => {
          return teacher.id;
        });

        setFavorites(favoritedprofilesIds);
      }
    });
  }
  useEffect(() => {
    api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      }
    }).then(res => {
      setIsFiltersVisible(false);
      setprofiles(res.data);
    })
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setIsFiltersVisible(false);
    setprofiles(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Nutricionistas disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Icon name="filter" size={25} color="#FfF" />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={text => setweek_day(text)}
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={text => setTime(text)}
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.profileList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {profiles.map((_profile: Profiler) => (
          <ProfileItem
            key={_profile.id}
            profile={_profile}
            favorited={favorites.includes(_profile.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ProfileList;
