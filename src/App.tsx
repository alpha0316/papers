// import  from 'react'
// import './App.css'
import Graph from './Components/graph'
import useMediaQuery from './Components/useMediaQuery'
// import "@fontsource/jetbrains-mono";


function App() {
  // const [count, setCount] = useState(0)
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div style={{
      marginBlock: 24,
      marginInline :isMobile? 12: 40,
      display : 'flex',
      flexDirection : 'column',
      gap : 40,
      marginBottom : 120
    }}>

      <div style={{
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        
      }}>
        <div style={{
          display : 'flex',
          gap : 34,
          alignItems : 'center',
          justifyContent : 'center'
        }}>
            <p style={{
              fontSize : 20,
              fontWeight : '700',
              color : 'rgba(0,0,0,0.5)',
               textAlign : 'center',
              margin : 0
            }}>c<span style={{
              color : 'black'
            }}>o</span>ins</p>
        </div>
            
        <div style={{
          display : 'flex',
          gap : 24
        }}>
    

         <div style={{
            display : 'flex',
            alignItems : 'center',
            gap : isMobile? 12 :  50
         }}>

          <div style={{
            display : 'flex',
            alignItems : 'center',
            gap : 12
          }}>
            <div style={{
               paddingBlock : 8,
               fontSize : 12,
               color : 'white',
               backgroundColor : '#1C76FD',
               margin : 0,
               width : 'auto',
               // height : 40,
               borderRadius : 40,
               alignItems : 'center',
               justifyContent : 'center',
               paddingInline : 14
            }}>
              E
            </div>
              <p style={{
                margin : 0,
                fontSize : 12
              }}>Essandoh</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.33331 8.58667V7.41333C1.33331 6.72 1.89998 6.14667 2.59998 6.14667C3.80665 6.14667 4.29998 5.29333 3.69331 4.24667C3.34665 3.64667 3.55331 2.86667 4.15998 2.52L5.31331 1.86C5.83998 1.54666 6.51998 1.73333 6.83331 2.26L6.90665 2.38666C7.50665 3.43333 8.49331 3.43333 9.09998 2.38666L9.17331 2.26C9.48665 1.73333 10.1666 1.54666 10.6933 1.86L11.8466 2.52C12.4533 2.86667 12.66 3.64667 12.3133 4.24667C11.7066 5.29333 12.2 6.14667 13.4066 6.14667C14.1 6.14667 14.6733 6.71333 14.6733 7.41333V8.58667C14.6733 9.28 14.1066 9.85333 13.4066 9.85333C12.2 9.85333 11.7066 10.7067 12.3133 11.7533C12.66 12.36 12.4533 13.1333 11.8466 13.48L10.6933 14.14C10.1666 14.4533 9.48665 14.2667 9.17331 13.74L9.09998 13.6133C8.49998 12.5667 7.51331 12.5667 6.90665 13.6133L6.83331 13.74C6.51998 14.2667 5.83998 14.4533 5.31331 14.14L4.15998 13.48C3.55331 13.1333 3.34665 12.3533 3.69331 11.7533C4.29998 10.7067 3.80665 9.85333 2.59998 9.85333C1.89998 9.85333 1.33331 9.28 1.33331 8.58667Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

         </div>

        </div>



      </div>

      <div style={{
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'column',
        gap : 24,
        marginInline :isMobile? 0 : 60,
      }}>

        <h1 style={{
          margin : 0,
          textAlign: 'left',
          width : '100%',
          display : 'flex',
          justifyContent : 'flex-start',
          alignItems : 'center',
          fontSize : isMobile? 24: ''
        }}> 
        
        <span style={{
          color : 'rgba(0,0,0,0.5)'
        }}>Hello,</span> Essandoh✨</h1>

        { isMobile ? 
          <div style={{
            display: 'flex',
            flexWrap: 'wrap', // Allow cards to wrap into a 2x2 grid
            gap: 12, // Reduced gap for mobile
            width: '100%', // Fit the container to the screen width
            marginInline: 0, // No margin on mobile to maximize space
            overflowX: 'auto', // Enable horizontal scrolling if needed
            paddingBottom: 8, // Add padding to make room for scrollbar
            scrollbarWidth: 'thin', // Firefox: Make scrollbar thinner
            WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
          }}>

            <div style={{
              display: 'flex',
              gap : 12,
            }}>

<div style={{
             backgroundColor : '#f4f4f4',
             borderRadius : 12,
             border : '1px solid rgba(0,0,0,0.1)',
             width :  270
         }}>
           <div style={{
             display : 'flex',
             alignItems : 'center',
             justifyContent : 'space-between',
             marginInline : 16,
             marginBlock : 12
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               gap : 12
             }}>
               <p style={{
                 margin : 0,
                 fontSize : 14
               }}>Today</p>
               <p style={{
                 margin : 0,
                 fontSize : 14,
                 // paddingBlock : 2,
                 paddingInline : 6,
                 borderRadius : 24,
                 backgroundColor : '#ECFDF3',
                 border : '1px solid #ABEFC6'
               }}>#Active</p>
        
             </div>
        
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
               <path d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M11.0833 5.83337C10.4417 5.83337 9.91666 6.35837 9.91666 7.00004C9.91666 7.64171 10.4417 8.16671 11.0833 8.16671C11.725 8.16671 12.25 7.64171 12.25 7.00004C12.25 6.35837 11.725 5.83337 11.0833 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M7.00001 5.83337C6.35834 5.83337 5.83334 6.35837 5.83334 7.00004C5.83334 7.64171 6.35834 8.16671 7.00001 8.16671C7.64168 8.16671 8.16668 7.64171 8.16668 7.00004C8.16668 6.35837 7.64168 5.83337 7.00001 5.83337Z" stroke="black" stroke-opacity="0.6"/>
             </svg>
        
           </div>
           <div style={{
             backgroundColor : 'white',
             borderRadius : 12,
             borderTop : '1px solid #4DB448',
             paddingTop : 2,
             paddingInline : 18,
             flexDirection : 'column',
             paddingBottom : 12,
             gap: 22,
             display : 'flex',
            
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               justifyContent : 'space-between',
        
             }}>
               <p style={{
                 fontSize : 18,
                 fontWeight : '700'
               }}> ₵54.30</p>
        
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path d="M13 9H7" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M22 10.9699V13.03C22 13.58 21.56 14.0299 21 14.0499H19.04C17.96 14.0499 16.97 13.2599 16.88 12.1799C16.82 11.5499 17.06 10.9599 17.48 10.5499C17.85 10.1699 18.36 9.94995 18.92 9.94995H21C21.56 9.96995 22 10.4199 22 10.9699Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
        
             </div>
             <div style={{
               display : 'flex',
               gap : 2,
               alignItems : "center"
             }}>
        
                <p style={{
                 margin : 0,
                 fontSize : 12,
                 color : 'rgba(0,0,0,0.5)'
               }}>You bought lunch and paid for a ride.</p>
        
             </div>
        
           </div>
        
         </div>
         <div style={{
             backgroundColor : '#f4f4f4',
             borderRadius : 12,
             border : '1px solid rgba(0,0,0,0.1)',
             width : 270
         }}>
           <div style={{
             display : 'flex',
             alignItems : 'center',
             justifyContent : 'space-between',
             marginInline : 16,
             marginBlock : 12
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               gap : 12
             }}>
               <p style={{
                 margin : 0,
                 fontSize : 14
               }}>This Week 💰</p>
        
        
             </div>
        
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
               <path d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M11.0833 5.83337C10.4417 5.83337 9.91666 6.35837 9.91666 7.00004C9.91666 7.64171 10.4417 8.16671 11.0833 8.16671C11.725 8.16671 12.25 7.64171 12.25 7.00004C12.25 6.35837 11.725 5.83337 11.0833 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M7.00001 5.83337C6.35834 5.83337 5.83334 6.35837 5.83334 7.00004C5.83334 7.64171 6.35834 8.16671 7.00001 8.16671C7.64168 8.16671 8.16668 7.64171 8.16668 7.00004C8.16668 6.35837 7.64168 5.83337 7.00001 5.83337Z" stroke="black" stroke-opacity="0.6"/>
             </svg>
        
           </div>
           <div style={{
             backgroundColor : 'white',
             borderRadius : 12,
             borderTop : '1px solid #4DB448',
             paddingTop : 2,
             paddingInline : 18,
             flexDirection : 'column',
             paddingBottom : 12,
             gap: 22,
             display : 'flex'
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               justifyContent : 'space-between',
        
             }}>
               <p style={{
                 fontSize : 18,
                 fontWeight : '700'
               }}>₵342.75</p>
        
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
               <path d="M2.66666 8.5H14.1667" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M6.66666 16.5H8.66666" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M11.1667 16.5H15.1667" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M22.6667 12.03V16.11C22.6667 19.62 21.7767 20.5 18.2267 20.5H7.10666C3.55666 20.5 2.66666 19.62 2.66666 16.11V7.89C2.66666 4.38 3.55666 3.5 7.10666 3.5H14.1667" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M17.1667 6.25H22.6667" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"/>
               <path d="M19.9167 9V3.5" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"/>
             </svg>
             </div>
             <div style={{
               display : 'flex',
               gap : 2,
               alignItems : "center"
             }}>
                <p style={{
                 margin : 0,
                 fontSize : 12,
                 color : 'rgba(0,0,0,0.5)'
               }}> Includes groceries, fuel, and grass touching.</p>
        
             </div>
        
           </div>
        
         </div>
              

            </div>
            <div style={{
              display: 'flex',
              gap : 12,
            }}>

            <div style={{
               backgroundColor : '#f4f4f4',
               borderRadius : 12,
               border : '1px solid rgba(0,0,0,0.1)',
               width : 270
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               justifyContent : 'space-between',
               marginInline : 16,
               marginBlock : 12
             }}>
               <div style={{
                 display : 'flex',
                 alignItems : 'center',
                 gap : 12,
                 height : 'auto'
               }}>
                 <p style={{
                   margin : 0,
                   fontSize : 14
                 }}>This Month 💸 </p>
               </div>
          
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                 <path d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z" stroke="black" stroke-opacity="0.6"/>
                 <path d="M11.0833 5.83337C10.4417 5.83337 9.91666 6.35837 9.91666 7.00004C9.91666 7.64171 10.4417 8.16671 11.0833 8.16671C11.725 8.16671 12.25 7.64171 12.25 7.00004C12.25 6.35837 11.725 5.83337 11.0833 5.83337Z" stroke="black" stroke-opacity="0.6"/>
                 <path d="M7.00001 5.83337C6.35834 5.83337 5.83334 6.35837 5.83334 7.00004C5.83334 7.64171 6.35834 8.16671 7.00001 8.16671C7.64168 8.16671 8.16668 7.64171 8.16668 7.00004C8.16668 6.35837 7.64168 5.83337 7.00001 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               </svg>
          
             </div>
             <div style={{
               backgroundColor : 'white',
               borderRadius : 12,
               borderTop : '1px solid #4DB448',
               paddingTop : 2,
               paddingInline : 18,
               flexDirection : 'column',
               paddingBottom : 12,
               gap: 22,
               display : 'flex'
             }}>
               <div style={{
                 display : 'flex',
                 alignItems : 'center',
                 justifyContent : 'space-between',
          
               }}>
                 <p style={{
                   fontSize : 18,
                   fontWeight : '700'
                 }}>₵1,982.10</p>
          
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                 <path d="M9.83331 13.75C9.83331 14.72 10.5833 15.5 11.5033 15.5H13.3833C14.1833 15.5 14.8333 14.82 14.8333 13.97C14.8333 13.06 14.4333 12.73 13.8433 12.52L10.8333 11.47C10.2433 11.26 9.84332 10.94 9.84332 10.02C9.84332 9.17999 10.4933 8.48999 11.2933 8.48999H13.1733C14.0933 8.48999 14.8433 9.26999 14.8433 10.24" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M12.3333 7.5V16.5" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M22.3333 12C22.3333 17.52 17.8533 22 12.3333 22C6.81331 22 2.33331 17.52 2.33331 12C2.33331 6.48 6.81331 2 12.3333 2" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M22.3333 6V2H18.3333" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M17.3333 7L22.3333 2" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
          
               </div>
               <div style={{
                 display : 'flex',
                 gap : 2,
                 alignItems : "center"
               }}>
          
                  <p style={{
                   margin : 0,
                   fontSize : 12,
                   color : 'rgba(0,0,0,0.5)'
                 }}>Most of your spending went to food, bills, and data.</p>
          
               </div>
          
             </div>
          
           </div>
           <div style={{
               backgroundColor : '#f4f4f4',
               borderRadius : 12,
               border : '1px solid rgba(0,0,0,0.1)',
               width :  270
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               justifyContent : 'space-between',
               marginInline : 16,
               marginBlock : 12
             }}>
               <div style={{
                 display : 'flex',
                 alignItems : 'center',
                 gap : 12
               }}>
                 <p style={{
                   margin : 0,
                   fontSize : 14
                 }}>Transactions 💳</p>
               </div>
          
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                 <path d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z" stroke="black" stroke-opacity="0.6"/>
                 <path d="M11.0833 5.83337C10.4417 5.83337 9.91666 6.35837 9.91666 7.00004C9.91666 7.64171 10.4417 8.16671 11.0833 8.16671C11.725 8.16671 12.25 7.64171 12.25 7.00004C12.25 6.35837 11.725 5.83337 11.0833 5.83337Z" stroke="black" stroke-opacity="0.6"/>
                 <path d="M7.00001 5.83337C6.35834 5.83337 5.83334 6.35837 5.83334 7.00004C5.83334 7.64171 6.35834 8.16671 7.00001 8.16671C7.64168 8.16671 8.16668 7.64171 8.16668 7.00004C8.16668 6.35837 7.64168 5.83337 7.00001 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               </svg>
          
             </div>
             <div style={{
               backgroundColor : 'white',
               borderRadius : 12,
               borderTop : '1px solid #4DB448',
               paddingTop : 2,
               paddingInline : 18,
               flexDirection : 'column',
               paddingBottom : 12,
               gap: 22,
               display : 'flex'
             }}>
               <div style={{
                 display : 'flex',
                 alignItems : 'center',
                 justifyContent : 'space-between',
          
               }}>
                 <p style={{
                   fontSize : 18,
                   fontWeight : '700'
                 }}>47</p>
          
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path d="M2 12.61H19" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M5.25 17.8101H6.96997" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M9.10999 17.8101H12.55" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
          
               </div>
               <div style={{
                 display : 'flex',
                 gap : 2,
                 alignItems : "center"
               }}>
                  <p style={{
                   margin : 0,
                   fontSize : 12,
                   color : 'rgba(0,0,0,0.5)'
                 }}>You've logged 47 expenses so far this month.</p>
          
               </div>
          
             </div>    
           </div>

            </div>

          
          </div>

          
          
        :

        <div style={{
          display: 'flex',
          gap: 16,
          width: '100%',
          marginInline: isMobile ? 0 : 60,
        }}>
         <div style={{
             backgroundColor : '#f4f4f4',
             borderRadius : 12,
             border : '1px solid rgba(0,0,0,0.1)',
             width :  270
         }}>
           <div style={{
             display : 'flex',
             alignItems : 'center',
             justifyContent : 'space-between',
             marginInline : 16,
             marginBlock : 12
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               gap : 12
             }}>
               <p style={{
                 margin : 0,
                 fontSize : 14
               }}>Today</p>
               <p style={{
                 margin : 0,
                 fontSize : 14,
                 // paddingBlock : 2,
                 paddingInline : 6,
                 borderRadius : 24,
                 backgroundColor : '#ECFDF3',
                 border : '1px solid #ABEFC6'
               }}>#Active</p>
        
             </div>
        
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
               <path d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M11.0833 5.83337C10.4417 5.83337 9.91666 6.35837 9.91666 7.00004C9.91666 7.64171 10.4417 8.16671 11.0833 8.16671C11.725 8.16671 12.25 7.64171 12.25 7.00004C12.25 6.35837 11.725 5.83337 11.0833 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M7.00001 5.83337C6.35834 5.83337 5.83334 6.35837 5.83334 7.00004C5.83334 7.64171 6.35834 8.16671 7.00001 8.16671C7.64168 8.16671 8.16668 7.64171 8.16668 7.00004C8.16668 6.35837 7.64168 5.83337 7.00001 5.83337Z" stroke="black" stroke-opacity="0.6"/>
             </svg>
        
           </div>
           <div style={{
             backgroundColor : 'white',
             borderRadius : 12,
             borderTop : '1px solid #4DB448',
             paddingTop : 2,
             paddingInline : 18,
             flexDirection : 'column',
             paddingBottom : 12,
             gap: 22,
             display : 'flex',
            
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               justifyContent : 'space-between',
        
             }}>
               <p style={{
                 fontSize : 18,
                 fontWeight : '700'
               }}> ₵54.30</p>
        
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 <path d="M13 9H7" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M22 10.9699V13.03C22 13.58 21.56 14.0299 21 14.0499H19.04C17.96 14.0499 16.97 13.2599 16.88 12.1799C16.82 11.5499 17.06 10.9599 17.48 10.5499C17.85 10.1699 18.36 9.94995 18.92 9.94995H21C21.56 9.96995 22 10.4199 22 10.9699Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
        
             </div>
             <div style={{
               display : 'flex',
               gap : 2,
               alignItems : "center"
             }}>
        
                <p style={{
                 margin : 0,
                 fontSize : 12,
                 color : 'rgba(0,0,0,0.5)'
               }}>You bought lunch and paid for a ride.</p>
        
             </div>
        
           </div>
        
         </div>
         <div style={{
             backgroundColor : '#f4f4f4',
             borderRadius : 12,
             border : '1px solid rgba(0,0,0,0.1)',
             width : 270
         }}>
           <div style={{
             display : 'flex',
             alignItems : 'center',
             justifyContent : 'space-between',
             marginInline : 16,
             marginBlock : 12
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               gap : 12
             }}>
               <p style={{
                 margin : 0,
                 fontSize : 14
               }}>This Week 💰</p>
        
        
             </div>
        
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
               <path d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M11.0833 5.83337C10.4417 5.83337 9.91666 6.35837 9.91666 7.00004C9.91666 7.64171 10.4417 8.16671 11.0833 8.16671C11.725 8.16671 12.25 7.64171 12.25 7.00004C12.25 6.35837 11.725 5.83337 11.0833 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M7.00001 5.83337C6.35834 5.83337 5.83334 6.35837 5.83334 7.00004C5.83334 7.64171 6.35834 8.16671 7.00001 8.16671C7.64168 8.16671 8.16668 7.64171 8.16668 7.00004C8.16668 6.35837 7.64168 5.83337 7.00001 5.83337Z" stroke="black" stroke-opacity="0.6"/>
             </svg>
        
           </div>
           <div style={{
             backgroundColor : 'white',
             borderRadius : 12,
             borderTop : '1px solid #4DB448',
             paddingTop : 2,
             paddingInline : 18,
             flexDirection : 'column',
             paddingBottom : 12,
             gap: 22,
             display : 'flex'
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               justifyContent : 'space-between',
        
             }}>
               <p style={{
                 fontSize : 18,
                 fontWeight : '700'
               }}>₵342.75</p>
        
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
               <path d="M2.66666 8.5H14.1667" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M6.66666 16.5H8.66666" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M11.1667 16.5H15.1667" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M22.6667 12.03V16.11C22.6667 19.62 21.7767 20.5 18.2267 20.5H7.10666C3.55666 20.5 2.66666 19.62 2.66666 16.11V7.89C2.66666 4.38 3.55666 3.5 7.10666 3.5H14.1667" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M17.1667 6.25H22.6667" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"/>
               <path d="M19.9167 9V3.5" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"/>
             </svg>
             </div>
             <div style={{
               display : 'flex',
               gap : 2,
               alignItems : "center"
             }}>
                <p style={{
                 margin : 0,
                 fontSize : 12,
                 color : 'rgba(0,0,0,0.5)'
               }}> Includes groceries, fuel, and grass touching.</p>
        
             </div>
        
           </div>
        
         </div>
         <div style={{
             backgroundColor : '#f4f4f4',
             borderRadius : 12,
             border : '1px solid rgba(0,0,0,0.1)',
             width : 270
         }}>
           <div style={{
             display : 'flex',
             alignItems : 'center',
             justifyContent : 'space-between',
             marginInline : 16,
             marginBlock : 12
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               gap : 12,
               height : 'auto'
             }}>
               <p style={{
                 margin : 0,
                 fontSize : 14
               }}>This Month 💸 </p>
             </div>
        
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
               <path d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M11.0833 5.83337C10.4417 5.83337 9.91666 6.35837 9.91666 7.00004C9.91666 7.64171 10.4417 8.16671 11.0833 8.16671C11.725 8.16671 12.25 7.64171 12.25 7.00004C12.25 6.35837 11.725 5.83337 11.0833 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M7.00001 5.83337C6.35834 5.83337 5.83334 6.35837 5.83334 7.00004C5.83334 7.64171 6.35834 8.16671 7.00001 8.16671C7.64168 8.16671 8.16668 7.64171 8.16668 7.00004C8.16668 6.35837 7.64168 5.83337 7.00001 5.83337Z" stroke="black" stroke-opacity="0.6"/>
             </svg>
        
           </div>
           <div style={{
             backgroundColor : 'white',
             borderRadius : 12,
             borderTop : '1px solid #4DB448',
             paddingTop : 2,
             paddingInline : 18,
             flexDirection : 'column',
             paddingBottom : 12,
             gap: 22,
             display : 'flex'
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               justifyContent : 'space-between',
        
             }}>
               <p style={{
                 fontSize : 18,
                 fontWeight : '700'
               }}>₵1,982.10</p>
        
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
               <path d="M9.83331 13.75C9.83331 14.72 10.5833 15.5 11.5033 15.5H13.3833C14.1833 15.5 14.8333 14.82 14.8333 13.97C14.8333 13.06 14.4333 12.73 13.8433 12.52L10.8333 11.47C10.2433 11.26 9.84332 10.94 9.84332 10.02C9.84332 9.17999 10.4933 8.48999 11.2933 8.48999H13.1733C14.0933 8.48999 14.8433 9.26999 14.8433 10.24" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M12.3333 7.5V16.5" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M22.3333 12C22.3333 17.52 17.8533 22 12.3333 22C6.81331 22 2.33331 17.52 2.33331 12C2.33331 6.48 6.81331 2 12.3333 2" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M22.3333 6V2H18.3333" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M17.3333 7L22.3333 2" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
        
             </div>
             <div style={{
               display : 'flex',
               gap : 2,
               alignItems : "center"
             }}>
        
                <p style={{
                 margin : 0,
                 fontSize : 12,
                 color : 'rgba(0,0,0,0.5)'
               }}>Most of your spending went to food, bills, and data.</p>
        
             </div>
        
           </div>
        
         </div>
         <div style={{
             backgroundColor : '#f4f4f4',
             borderRadius : 12,
             border : '1px solid rgba(0,0,0,0.1)',
             width :  270
         }}>
           <div style={{
             display : 'flex',
             alignItems : 'center',
             justifyContent : 'space-between',
             marginInline : 16,
             marginBlock : 12
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               gap : 12
             }}>
               <p style={{
                 margin : 0,
                 fontSize : 14
               }}>Transactions 💳</p>
             </div>
        
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
               <path d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M11.0833 5.83337C10.4417 5.83337 9.91666 6.35837 9.91666 7.00004C9.91666 7.64171 10.4417 8.16671 11.0833 8.16671C11.725 8.16671 12.25 7.64171 12.25 7.00004C12.25 6.35837 11.725 5.83337 11.0833 5.83337Z" stroke="black" stroke-opacity="0.6"/>
               <path d="M7.00001 5.83337C6.35834 5.83337 5.83334 6.35837 5.83334 7.00004C5.83334 7.64171 6.35834 8.16671 7.00001 8.16671C7.64168 8.16671 8.16668 7.64171 8.16668 7.00004C8.16668 6.35837 7.64168 5.83337 7.00001 5.83337Z" stroke="black" stroke-opacity="0.6"/>
             </svg>
        
           </div>
           <div style={{
             backgroundColor : 'white',
             borderRadius : 12,
             borderTop : '1px solid #4DB448',
             paddingTop : 2,
             paddingInline : 18,
             flexDirection : 'column',
             paddingBottom : 12,
             gap: 22,
             display : 'flex'
           }}>
             <div style={{
               display : 'flex',
               alignItems : 'center',
               justifyContent : 'space-between',
        
             }}>
               <p style={{
                 fontSize : 18,
                 fontWeight : '700'
               }}>47</p>
        
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M2 12.61H19" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M5.25 17.8101H6.96997" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M9.10999 17.8101H12.55" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
        
             </div>
             <div style={{
               display : 'flex',
               gap : 2,
               alignItems : "center"
             }}>
                <p style={{
                 margin : 0,
                 fontSize : 12,
                 color : 'rgba(0,0,0,0.5)'
               }}>You've logged 47 expenses so far this month.</p>
        
             </div>
        
           </div>
        
         </div>
        </div>
        }  

        
        <div style={{
          width: '100%',
          height : 500,
          borderRadius : 12,
          border : '1px solid rgba(0,0,0,0.1)',
          display : 'flex',
          flexDirection : 'column',
          gap : 24,
          // backgroundColor: 'red',
          
        }}>

          <div style={{
            display : 'flex',
            flexDirection : 'column',
            gap : 12,
            justifyContent : 'flex-start',
            margin : 16
          }}>
             <div style={{
              display :'flex',
              gap : 12,
              alignItems :'center'
             }}>
             <p style={{
                margin : 0,
                fontSize : 14,
                color : 'rgba(0,0,0,0.6)'
              }}>Monthly Overview</p>
               <p style={{
                margin : 0,
                fontSize : 14,
                color : 'rgba(0,0,0,0.6)',
                padding : 4,
                borderRadius : 4,
                backgroundColor: '#fafafa',
                width : '13%'
              }}>April</p>
             </div>
               <p style={{
                margin : 0,
                fontSize : 26,
                fontWeight : '700'
              }}>₵1,982.10</p>

            <div style={{
              display : 'flex',
              gap : 2,
              alignItems : "center"
            }}>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">             
              <path d="M8.6667 13.3333L7.33336 13.3333L7.33336 5.33332L3.6667 8.99998L2.72003 8.05332L8.00003 2.77332L13.28 8.05332L12.3334 8.99998L8.6667 5.33332L8.6667 13.3333Z" fill="#48BB78"/>
              </svg>

              <p style={{
                margin : 0,
                fontSize : 12,
                color : '#48BB78'
              }}>(+75%) more</p>
               <p style={{
                margin : 0,
                fontSize : 12,
                color : 'rgba(0,0,0,0.5)'
              }}>Last 3 Weeks</p>
            </div>

          </div>

          <Graph/>
            <div>
       
        </div>

      </div>

      </div>

     
      
      <div style={{
        display : 'flex',
        padding : 12,
        borderRadius : 24,
        border : '1px solid rgba(0,0,0,0.1)',
        backgroundColor : '#F4F4F4',
        width : 'auto%',
        alignSelf : 'stretch',
        gap : 12,
        alignItems : 'center',
        position : 'fixed',
        bottom : isMobile ? '2%' : '5%',
        left : isMobile? '7%' : '32%'
      }}>

        <div style={{
          display : 'flex',
          padding : 8,
          border : '1px solid rgba(0,0,0,0.1)',
          backgroundColor : 'white',
          borderRadius : 12
        }}>
             <p style={{
              fontSize : 14,
              fontWeight : '700',
              color : 'rgba(0,0,0,0.5)',
               textAlign : 'center',
              margin : 0
            }}>c<span style={{
              color : 'black'
            }}>o</span>ins</p>
        </div>
        <div style={{
          display : 'flex',
          padding : 8,
          border : '1px solid rgba(0,0,0,0.1)',
          backgroundColor : 'white',
          borderRadius : 12,
          alignItems : 'center'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14.44 6.95996L13.7867 9.74663C13.2267 12.1533 12.12 13.1266 10.04 12.9266C9.70667 12.9 9.34667 12.84 8.96 12.7466L7.84 12.48C5.06 11.82 4.2 10.4466 4.85333 7.65997L5.50667 4.86663C5.64 4.29996 5.8 3.80663 6 3.39996C6.78 1.78663 8.10667 1.3533 10.3333 1.87996L11.4467 2.13996C14.24 2.7933 15.0933 4.1733 14.44 6.95996Z" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.04 12.9267C9.62667 13.2067 9.10667 13.44 8.47333 13.6467L7.42 13.9934C4.77333 14.8467 3.38 14.1334 2.52 11.4867L1.66667 8.85336C0.813332 6.20669 1.52 4.80669 4.16667 3.95336L5.22 3.60669C5.49333 3.52002 5.75333 3.44669 6 3.40002C5.8 3.80669 5.64 4.30002 5.50667 4.86669L4.85333 7.66002C4.2 10.4467 5.06 11.82 7.84 12.48L8.96 12.7467C9.34667 12.84 9.70667 12.9 10.04 12.9267Z" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.42667 5.68665L11.66 6.50665" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.77333 8.26672L9.70666 8.76006" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div style={{
          display : 'flex',
          padding : 8,
          border : '1px solid rgba(0,0,0,0.1)',
          backgroundColor : 'white',
          borderRadius : 12,
          alignItems : 'center'
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M11.52 6.96672L14 4.48669L11.52 2.00671" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 4.48669H14" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.47998 9.03333L2 11.5133L4.47998 13.9933" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 11.5134H2" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div style={{
          display : isMobile? 'none' : 'flex',
          gap : 12,
          alignItems : 'center',
          padding : 10,
          backgroundColor : '#FAFAFA',
          borderRadius : 12,
          border : '1px solid rgba(0,0,0,0.1)',
          
        }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.33334 1.33337V3.33337" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.6667 1.33337V3.33337" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.33334 6.06006H13.6667" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 5.66671V11.3334C14 13.3334 13 14.6667 10.6667 14.6667H5.33333C3 14.6667 2 13.3334 2 11.3334V5.66671C2 3.66671 3 2.33337 5.33333 2.33337H10.6667C13 2.33337 14 3.66671 14 5.66671Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.997 9.13338H8.00299" stroke="black" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.52953 9.13338H5.53552" stroke="black" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.52953 11.1334H5.53552" stroke="black" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p style={{
              margin : 0,
              fontSize : 12
            }}>1 Apr- 31 Apr</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8H12" stroke="#1C76FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 12V4" stroke="#1C76FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <div style={{
          height : 30,
          // width : 1,
          border : '1px solid rgba(0,0,0,0.1)'
        }}></div>

        <div style={{
              fontSize : 12,
              padding : 10,
              backgroundColor : '#1C76FD',
              color : 'white',
              borderRadius : 16,
              display : 'flex',
              alignItems : 'center',
        }}>Upload  Statement</div>  


      </div>
        
    </div>
  )
}

export default App
