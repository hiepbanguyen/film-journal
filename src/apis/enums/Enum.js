const Enum = Object.freeze({
    StatusResponse: {
        Success: 200
    },
    TypeUser: {
        All : 0,
        // Người mình đang theo dõi
        Following : 1, 
        // Người đang theo dõi mình
        Follower : 2,
        // Người bị block
        Blocked : 3,
    }
});
  
export default Enum;