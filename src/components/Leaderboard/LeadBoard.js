import React from 'react';
import styles from './lead_style.module.scss';
import  Avatar from '../../images/person.svg';
import AvatarWithName from './AvatarWithName';

const leaderboardData = [
  { rank: 1,  Avatar,    name: 'Kirsty Medina', scoutPoints: 20201 },
  { rank: 2, name: 'Jane', scoutPoints: 130 },
  { rank: 3, name: 'Mike', scoutPoints: 120 },
  { rank: 4, name: 'Sarah', scoutPoints: 110 },
  { rank: 5, name: 'Tom', scoutPoints: 100 },
];

// const getInitials = (name) => {
//   const nameParts = name.split(' ');
//   const initials = nameParts.map((part) => part.charAt(0).toUpperCase());
//   return initials.join('');
// };


//Refactor my codebase
// 1. Create a new component called Leaderboard
// 2. Move the leaderboard table into the new component
// 3. Import the new component into App.js
// 4. Render the new component in App.js





 
const Leaderboard = () => {
  return (
    <div style={{width: '374.66px', height: '2225px'}}>
      <div className={styles['Leaderboard-Title']}>
        <h4>Leaderboard</h4>
      </div>

      <AvatarWithName
        avatarSrc="https://example.com/avatar.jpg" // Replace with the actual avatar image URL
        name="John Doe"
      />
      <table className="w-full">
         
        <thead>
       
          <tr>


        

            <th className="py-2"><span>Rank</span></th>  

           <th className="py-2"><span>Name</span></th>    

           <th className="py-2 text-right">Scout Points</th> 

          
           
          </tr>
       
        </thead>
        
        <tbody>
          {leaderboardData.map((player) => (
            <tr
              key={player.rank}
              className={`${
                player.rank <= 3 ? 'bg-yellow-200' : 'bg-transparent'
              } rounded-lg`}
            >
              <td className="py-2 flex items-center">
                <div className="w-8 h-8 bg-blue-500 text-white font-bold text-center rounded-full">
                  {player.rank}
                </div>
              </td>

              <td className="py-2">

              <div className="w-8 h-8 bg-blue-500 text-white font-bold text-center rounded-full">
                   <img src={player.Avatar}/>
                </div> 
                
                <td className="py-2">{player.name}</td>

                <div className="w-4 h-4 bg-blue-500 text-white font-bold text-center rounded-full">
                  {/* {getInitials(player.name)} */}
                  <img src={player.Avatar}/>
                </div> 
              </td>

              <td className="py-2 text-right">{player.scoutPoints}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
