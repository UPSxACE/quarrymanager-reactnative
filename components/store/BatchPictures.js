import { Text, StyleSheet } from 'react-native';
import { HStack, VStack, Image, Icon, Center, FlatList } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Characteristics(props) {
  const data = [
    {
      id: '1',
      pic: 'https://s3-alpha-sig.figma.com/img/2b5e/746c/907f2095757a1119d42b9c46778df028?Expires=1668384000&Signature=X7rCq4TwRkPVcbQyjh0c81SiYpTrdADbQUWViCNJXaeVZ2Czc~9lP6h0byWYajYK5WlhahEH0I4NtY6wYbR54CiKUhbxxKLq8si1oacyxiazu6L6aMyFh9GPo256yJeHDPo8OciSuoa6BEFFGwzYVuHmDvtojfmHFFRWWmZ5uzxUKZF7GjsnGDkAVHqUQTksn4sBj9Ir-7IZbQWLTS4QjFDW79AU~3NdjTLky0nFfKuy~vvKf~KZs~0lzt1Mpl3DPrbGzzzfohmGumVICZ4559Z~u43yBd~trvXNPa-FeUyrCDPvlpIwkmzvCg4xhVLIRcoDFA18XvBmdFRwg5BnoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: '2',
      pic: 'https://s3-alpha-sig.figma.com/img/3cc6/c441/caa9b9e2ed08473ecd152ffc1ed14a17?Expires=1668384000&Signature=SXc4RjXuebTw33w-oTk4R9PQ2djvSE9FK28AVTr5tM1taCywEy6fDLNwN~7NQd1Ck3Wou4-jC9eF84C9yfSHY-6NCNjNXVJKA8R-C6cG~HhpeUkci-rOGZIUI4llE9LZtHfABFL8H33gOvWjFDuQLHL9v26eWq-5MkGWmB7EhzPaTYqyXngFlyQuKdInXcV7qXDkQLwzga67K~HLxkRt6dJNydXBBLWAwjZL-4Aie7N9cuo4hDhpaMdp8QAbPJNA2ufTzp4ypwq3iQ0lrxx-OBggMUWSpESBsl~F5XMQ4FUGZfms36xI9qguvdlRBbzTGmQd47T3wQn6MVZiKkoBIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: '3',
      pic: 'https://s3-alpha-sig.figma.com/img/cc11/350c/ad8ccf7fa11e451b1081ba1b01b62683?Expires=1668384000&Signature=R8AgUg2zuNKCc7akOXKetNnFdsqN-KQWuM-luzIUZ5-PfxnUdSiv73lcHGXZjHydjKyzvrjlbmwdN7cX~kjIyyfZ52M2nkJH4m-uto1WkRm0hjcgh~FICGAsc0L~7mSKDlxfa50Jp3XwwgHjuj6vAYNXiR2KjcIKvEJKE36glPIiETdIBKY0hxnQycmSirgNzbx1sIwRIvnwi4wAptKCeyVJ4emYTcDGcD1UA0wJbuZylEoM40lstPR7QXRXop3saRY9MssOjwijSRw4SoY87-1miV01eGRRjY49eknaKX1S1Sg1IacECJeKd42v9N-iGpuajY2hbRrn6zR0l6sxmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: '4',
      pic: 'https://s3-alpha-sig.figma.com/img/5031/94ff/da9bd3510110493ee5c02f255154875a?Expires=1668384000&Signature=DKNx7G6u-jIZh7uVV68Ju1OvEftxKkycXd92cSdRZOgQt6n8~yJlB7I4smKPs3rhDE7IBiZMlJp1SaJnZhChkK14P1CTKuEXLjpEVT5aRZVUPDJmPle1GEI3yk1UMFoZNYbmawKIDrDqLAXS0w8cKHePC0E67v5Jplot7pvfIqfnSzMdTgk5LH4qyPtKhWiKQbfWUaIZYhuD1Rnq8vQMJSzzD1wzwWj4kYzZRVzUfmPsQFrHoCt-XyTdZfMXAUfLxV3haYRjm1yHns0awfwltZ08WhAKnLUSvDPKYD7zX3EtZuUCy3~xnAgNGAsJEGaWvdzh1uGt5wyODH14j~WJhg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: '5',
      pic: 'https://s3-alpha-sig.figma.com/img/e2a4/670d/1f8aa183430c7693c6e8ef856af8a64a?Expires=1668384000&Signature=A98FnDBovxTvq11uKqL89uzmQ4nLoUBtZ1-yr-GcWhQFR4L1ObbOAxsWXCck-TZvMRZaZPsNGaYqVDP3y16K5XOPT3Fuje6ifILxwuJaoGDiyd1HZRw9hqLQwe9QyDQpFtYf-QZV7NdiNAxGnaIn25PellkBHS-7HhrLlJQulyOaCqfy2INN1l0zc1parGch3tmAojOgskwGh~5qyKgcu71MUc6N2oFeot6Ckpe1eyt2ZgTaH-VisTmLbW41XGhmNIdmlyy2sAIc6SgK1iN0Hsz-RRR57gG74qBWt0gmQO2gwZrCoF4tXj3oWxiLLJCh7brmbNzCa-wqrNHdtyllsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: '6',
      pic: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg',
    },
    {
      id: '7',
      pic: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg',
    },
  ];
  const Item = ({ item, index }) => {
    if (index > 0 && index <= 4) {
      return (
        <Image
          borderRadius={4}
          ml={index == 1 ? 0 : (Dimensions.get('window').width - 36) * 0.05}
          h={(Dimensions.get('window').width - 36) * 0.16}
          w={(Dimensions.get('window').width - 36) * 0.16}
          alt="Batch picture"
          source={{
            uri: item.pic,
          }}
        ></Image>
      );
    } else if (index == 5) {
      return (
        <Center
          borderRadius={4}
          ml={(Dimensions.get('window').width - 36) * 0.05}
          w={(Dimensions.get('window').width - 36) * 0.16}
          h={(Dimensions.get('window').width - 36) * 0.16}
          bg="#394A58"
        >
          <Icon size="6" color="#ffff" as={<Feather name="chevron-right" />} />
        </Center>
      );
    }
  };
  const renderItem = ({ item, index }) => {
    return <Item index={index} item={item}></Item>;
  };

  return (
    <VStack alignItems={'center'}>
      <HStack>
        <HStack>
          <Image
            borderRadius={4}
            w={Dimensions.get('window').width - 36}
            h="175px"
            alt="Batch picture"
            source={{
              uri: data[0].pic,
            }}
          />
        </HStack>
      </HStack>
      <FlatList
        paddingTop={'16px'}
        contentContainerStyle={{
          flexDirection: 'row',

          width: Dimensions.get('window').width - 36,
        }}
        scrollEnabled={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
      />
    </VStack>
  );
}

const characteristicsStyles = StyleSheet.create({});
