function skillsMember() {
  if (document.getElementById('skills-member')) {
    const skillsMember = new Vue({
      el: '#skills-member',
      data: {
        skills: [
          { name: 'HTML5', level: 90 },
          { name: 'CSS3', level: 80 },
          { name: 'JavaScript', level: 70 },
          { name: 'jQuery', level: 50 },
          { name: 'PHP', level: 60 },
          { name: 'WordPress', level: 50 },
          { name: 'Vue.js', level: 40 },
          { name: 'React.js', level: 30 },
          { name: 'Git', level: 40 },
          { name: 'Photoshop', level: 50 }
        ]
      },
      methods: {
        levelClass: function(level) {
          return {
            'skill__level--90': level >= 90,
            'skill__level--80': level >= 80 && level < 90,
            'skill__level--70': level >= 70 && level < 80,
            'skill__level--60': level >= 60 && level < 70,
            'skill__level--50': level >= 50 && level < 60,
            'skill__level--40': level >= 40 && level < 50,
            'skill__level--30': level >= 30 && level < 40,
            'skill__level--20': level >= 20 && level < 30,
            'skill__level--10': level >= 10 && level < 20,
            'skill__level--0': level >= 0 && level < 10
          };
        }
      }
    });
  }
}
