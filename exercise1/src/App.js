
import './App.css';
import Header from './components/Header';
import NewsNotification from './components/NewsNotification';
import MainSections from './components/MainSections';
import SideSection from './components/SideSection';
import SubHeader from './components/SubHeader';
import koronaphoto from './photos/korona.png';


const NewsNotificationData = [
  {
    topic:'Päivän Timantti',
    body: 'Savon perukoilla Jukka Nissinen kääntää Simpsoneita, tekee rockia perunoista ja ajelee traktorilla – Hänen työnsä helmi on motherfucker-sanan luova käännös'
  },
  {
    topic:'Kulttuuri',
    body: '15-vuotiasta Alanis Morissettea käytettiin seksuaalisesti hyväksi useita kertoja, laulaja kertoo dokumentissa: ”Kerroin asiasta muutamille ihmisille, mutta asia kaikui kuuroille korville”'
  },
  {
    topic:'Mainos',
    body:'Aloita aamusi Hesarilla. Tutustu nyt 2 viikkoa maksutta!'
  },
  ]

 const mainNewsData = [
   {
      photo: koronaphoto,
      topic: 'Koronavirus |',
      body: 'Suomalaisia kannustetaan nyt korona­viruksen koti­testien käyttöön – apteekki ja kaupat uskovat, että testi­paketteja riittää',
      tag: 'Kotimaa 18:48'
   },
  
 ] 

 const SideSectionData = [
 {
  luetuimmat: 'Luetuimmat',
  itemNumber: '1',
  topic: 'Brexit |',
  body: 'Boris Johnsonin toive 20 vuoden takaa on toteutumassa: Metri­järjestelmän odotetaan poistuvan käytöstä Britanniassa'
 },
 {
  
  itemNumber: '2',
  topic: 'Brexit |',
  body: 'Boris Johnsonin toive 20 vuoden takaa on toteutumassa: Metri­järjestelmän odotetaan poistuvan käytöstä Britanniassa'
 },
 {
  
  itemNumber: '3',
  topic: 'Brexit |',
  body: 'Boris Johnsonin toive 20 vuoden takaa on toteutumassa: Metri­järjestelmän odotetaan poistuvan käytöstä Britanniassa'
 },
 {

  itemNumber: '4',
  topic: 'Brexit |',
  body: 'Boris Johnsonin toive 20 vuoden takaa on toteutumassa: Metri­järjestelmän odotetaan poistuvan käytöstä Britanniassa'
 }

 ]

 const backGround = {backgroundColor: '#e9eaed'};

function App() {
  return (
    <div style = {backGround}>
    <Header />

    <SubHeader />
    {
      NewsNotificationData.map(element => <NewsNotification topic={ element.topic } body={ element.body } />)
    }
    
    <MainSections />
    {
      mainNewsData.map(element => <MainSections photo={element.photo} topic={ element.topic } body={ element.body } tag={ element.tag }/>)
    }

    <SideSection />
    {
      SideSectionData.map(element => <SideSection luetuimmat={element.luetuimmat} itemNumber={element.itemNumber} topic={element.topic} body={element.body}/>)
    }
    </div>

  );
}

export default App;
