function server(name, ip) {
    this.name = name;
    this.ip = ip;
}
server.prototype.getIp = function () {
    return this.ip;
};

const aws = new server("AWS Russia", "1.0.0.1");

console.log(aws.getUrl());
