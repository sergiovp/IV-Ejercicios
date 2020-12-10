const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../express_variables.js');
const expect = require('chai').expect;

chai.use(chaiHttp);

describe( "Tests fichero express_variables.js", () => {
    it('GET empleado por defecto (/)', (done) => {
        chai.request(app)
        .get('/')
        .end( function(err,res) {
            expect(res).to.have.status(200);
            expect(res.body._id).to.equal(0);
            expect(res.body._nombre).to.equal("Sergio");
            expect(res.body._apellido).to.equal("Vela");
            expect(res.body._email).to.equal("sergiovp96@gmail.com");
            done();
        });
    });

    it('GET empleado mandado (/empleado)', (done) => {
        chai.request(app)
        .get('/empleado?id=1&nombre=Noe&apellido=Sbrn&email=noe@gmail.com')
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res.body._id).to.equal("1");
            expect(res.body._nombre).to.equal("Noe");
            expect(res.body._apellido).to.equal("Sbrn");
            expect(res.body._email).to.equal("noe@gmail.com");
            done();
        });
    });
});
