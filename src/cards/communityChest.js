// community chest cards
import CommunityChestTile from "../tiles/BaseTile";

export const communityChestArray = [
    {
      title: 'Advance to Go',
      description: 'Advance to Go and collect $200.',
      action: (player) => {
        player.moveToTile(goTile);
        player.collectMoney(200);
      }
    },
    {
      title: 'Bank error in your favor',
      description: 'Bank error in your favor. Collect $75.',
      action: (player) => {
        player.collectMoney(75);
      }
    },
    {
      title: 'Doctor\'s fees',
      description: 'Doctor\'s fees. Pay $50.',
      action: (player) => {
        player.payMoney(50);
      }
    },
    {
      title: 'Get out of Jail free',
      description: 'Get out of Jail free. This card may be kept until needed or sold.',
      action: (player) => {
        player.receiveGetOutOfJailCard();
      }
    },
    {
      title: 'Go to Jail',
      description: 'Go directly to Jail. Do not pass Go, do not collect $200.',
      action: (player) => {
        player.moveToTile(jailTile);
        player.goToJail();
      }
    },
    {
      title: 'Grand Opera Night',
      description: 'Grand Opera Night. Collect $50 from every player for opening night seats.',
      action: (player, otherPlayers) => {
        for (const otherPlayer of otherPlayers) {
          if (otherPlayer !== player) {
            player.receiveMoneyFromPlayer(50, otherPlayer);
          }
        }
      }
    },
    {
      title: 'Income Tax refund',
      description: 'Income Tax refund. Collect $20.',
      action: (player) => {
        player.collectMoney(20);
      }
    },
    {
      title: 'It\'s your birthday!',
      description: 'It\'s your birthday! Collect $10 from each player.',
      action: (player, otherPlayers) => {
        for (const otherPlayer of otherPlayers) {
          if (otherPlayer !== player) {
            otherPlayer.payMoneyToPlayer(10, player);
          }
        }
      }
    },
    {
      title: 'Life insurance matures',
      description: 'Life insurance matures. Collect $100.',
      action: (player) => {
        player.collectMoney(100);
      }
    },
    {
      title: 'Pay hospital fees',
      description: 'Pay hospital fees. Pay $100.',
      action: (player) => {
        player.payMoney(100);
      }
    },
    {
      title: 'Pay school fees',
      description: 'Pay school fees. Pay $50.',
      action: (player) => {
        player.payMoney(50);
      }
    },
    {
      title: 'Receive consultancy fee',
      description: 'Receive consultancy fee. Collect $25.',
      action: (player) => {
        player.collectMoney(25);
      }
    },
    {
      title: 'Street repairs',
      description: 'Street repairs. For each house pay $40. For each hotel pay $115.',
      action: (player) => {
        const totalHouses = player.getTotalHouses();
        const totalHotels = player.getTotalHotels();
        const houseRepairCost = totalHouses * 40;
        const hotelRepairCost = totalHotels * 115;
        const totalRepairCost = houseRepairCost + hotelRepairCost;
  
        player.payMoney(totalRepairCost);
      }
    },
    {
      title: 'You have won second prize in a beauty contest',
      description: 'You have won second prize in a beauty contest. Collect $10.',
      action: (player) => {
        player.collectMoney(10);
      }
    },
    {
      title: 'You inherit $100',
      description: 'You inherit $100.',
      action: (player) => {
        player.collectMoney(100);
      }
    },
    // Add more community chest cards as needed
  ];
  
  const randomIndex = Math.floor(Math.random() * communityChestArray.length);
  

  const communityChestCard1 = {
    index: 2,
    name: "Community Chest",
    tile: new CommunityChestTile(
      communityChestArray[randomIndex].title,
      communityChestArray[randomIndex].description,
      communityChestArray[randomIndex].action
    )
  };

  const communityChestCard2 = {
    index: 17,
    name: "Community Chest",
    tile: new CommunityChestTile(
      communityChestArray[randomIndex].title,
      communityChestArray[randomIndex].description,
      communityChestArray[randomIndex].action
    )
  };
  
  const communityChestCard3 = {
    index: 33,
    name: "Community Chest",
    tile: new CommunityChestTile(
      communityChestArray[randomIndex].title,
      communityChestArray[randomIndex].description,
      communityChestArray[randomIndex].action
    )
  };
  
  const communityChestCards = [
      communityChestCard1,
      communityChestCard2,
      communityChestCard3,
  ]
  
  export { communityChestCards };                                                                                                                                                                                                                                                             