import Empty from './components/Empty.vue'
import Index from './components/Index.vue'
import PlayTime from './components/PlayTime.vue'
import PayAmount from './components/PayAmount.vue'
import Mtime from './components/Mtime.vue'
import Invite from './components/Invite.vue'
import TimePromo from './components/TimePromo.vue'
import Newbie from './components/Newbie.vue'
import Prop from './components/Prop.vue'
import Continuous from './components/Continuous.vue'
import OnlineBox from './components/OnlineBox.vue'
import Region from './components/Region.vue'

import ActScore from './components/ActScore.vue'
import Exchange from './components/Exchange.vue'
import SevenDays from './components/SevenDays.vue'
import Puzzle from './components/Puzzle.vue'
import PlayScoreRank from './components/PlayScoreRank.vue'
import PayLottery from './components/PayLottery.vue'

import SignWheel from './components/SignWheel.vue'
import TaskActive from './components/TaskActive.vue'

// import HelloWorld from './components/HelloWorld.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/playtime', component: PlayTime },
  { path: '/payamount', component: PayAmount },
  { path: '/mtime', component: Mtime },
  { path: '/invite', component: Invite },
  { path: '/timepromo', component: TimePromo },
  { path: '/newbie', component: Newbie },
  { path: '/prop', component: Prop },
  { path: '/continuous', component: Continuous },
  { path: '/onlinebox', component: OnlineBox },
  { path: '/region', component: Region },

  { path: '/actscore', component: ActScore },
  { path: '/exchange', component: Exchange },
  { path: '/sevendays', component: SevenDays },
  { path: '/puzzle', component: Puzzle },
  { path: '/playscorerank', component: PlayScoreRank },
  { path: '/paylottery', component: PayLottery },


  { path: '/signwheel', component: SignWheel },
  { path: '/taskactive', component: TaskActive },

  { path: '/404', component: Empty }

]

export { routes }