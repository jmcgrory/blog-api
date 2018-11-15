interface JwtStrategyOptions {
    jwtFromRequest: any;
    secretOrKey: string;
    audience: string;
}

export default JwtStrategyOptions;
