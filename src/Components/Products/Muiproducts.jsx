// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function Muiproducts({data}) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const {title, price, description, category, image} = data;

//   return (
//     <Card sx={{ width: '24rem', height:'30rem' }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             {title[0]}
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={title.substring(0, 50)}
//         subheader={category}
//       />
//       <CardMedia
//         sx={{ padding: '1rem'}}
//         component="img"
//         height="216"
//         image={image}
//         alt={title}
//       />
//       <CardContent>
//         <Typography variant="p" color="text.secondary">
//           {description.substring(0, 120)}...
//         </Typography>
//         <Typography variant="h5" color="text.primary">
//           ${price}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }