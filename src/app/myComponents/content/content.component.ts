import { Component, OnInit } from '@angular/core';
import { post } from '../../post';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  posts: post[];
  randomPosts : post[];
  constructor() {
    this.posts = [
      { 
        sno :1,
        title: "At least 17 Indians on board Israel-linked ship seized by Iran: Report",
        details: "At least 17 Indians are on board an Israeli-linked container ship that has been seized by the Iranian military near the Strait of Hormuz, as per a report by news agency PTI.India is in touch with Iran through diplomatic channels, both in Tehran and in Delhi, to ensure the welfare and early release of its nationals, the report mentioned. Earlier on Saturday, a video seen by The Associated Press showed commandos raiding a ship near the Strait of Hormuz by helicopter, an attack a Mideast defence official attributed to Iran amid wider tensions between Tehran and the West.",
        category: "common",
        imageLocation: "../../../assets/posts/post1.jpg",
        videoLocation: null
      }, {
        sno:2,
        title: "Watch: Shark caught in fishing net rescued by forest officials, fishermen",
        details: "A shark was caught by fishermen in fishing nets off the Atchutapuram coast in Anakapalli district in Andhra Pradesh. An officer from the forest department said that upon information, forest officials reached the spot and the shark was released into the sea with the help of fishermen.",
        category: "common",
        imageLocation: null,
        videoLocation: "../../../assets/videos/vid1.mp4"
      }, {
        sno:3,
        title: "Water purifier is powered by static electricity from your body",
        details: "A 10-minute walk can build up enough static electricity to power a battery-free water purifier, which could be especially helpful during disasters or in regions that lack access to clean water and stable power supplies. A bottle can disinfect drinking water by channelling static electricity built up from just 10 minutes of walking – no limited supply of water purification tablets or external power sources required.“Our water disinfection approach holds particular significance for populations in underdeveloped regions, isolated areas, disaster zones and conflict areas lacking adequate sanitation infrastructure,” says Sang-Woo Kim at Yonsei University in South Korea.",
        category: "science&Tech",
        imageLocation: "../../../assets/posts/post2.jpg",
        videoLocation: null
      }, {
        sno:4,
        title: "Chatbots can persuade conspiracy theorists their view might be wrong",
        details: "Large language model chatbots like those powering ChatGPT can reduce people’s beliefs in conspiracy theories by debating with them. And the approach they employ could even teach people better ways of interacting with conspiracy theorists. Although past research suggests that the level of beliefs in conspiracy theories in the population hasn't changed substantially in the US or in six surveyed European countries over about a decade, those who subscribe to such ideas have persistent, dogged faith in those beliefs.",
        category: "science&Tech",
        imageLocation: null,
        videoLocation: null
      },
      {
        sno:5,
        title: "Rain, thunderstorm disrupt flights, cool down Delhi-NCR",
        details: "Twenty-two flights headed towards Delhi were diverted on Saturday due to inclement weather. The India Meteorological Department (IMD) attributed the rains in the city to an active western disturbance over northwest India. It has also forecast light rain accompanied by gusty winds on Sunday. The IMD also issued an advisory for thunderstorms and lightning over Delhi-NCR, urging people to stay indoors. It also advised people to close windows and doors and avoid travelling.",
        category: "common",
        imageLocation: "../../../assets/posts/post3.jpg",
        videoLocation: null
      }
    ]
  }
  
  ngOnInit(): void {
    this.selectRandomPosts();
  }
  selectRandomPosts() {
    const numPostsToDisplay = 3;
    const totalPostsAvailable = this.posts.length;
    const selectedIndices: number[] = [];

    while (selectedIndices.length < numPostsToDisplay) {
      const randomIndex = Math.floor(Math.random() * totalPostsAvailable);
      if (!selectedIndices.includes(randomIndex)) {
        selectedIndices.push(randomIndex);
        this.randomPosts.push(this.posts[randomIndex]);
      }
    }
  }
}
