function vwb(a){this.b=a}
function swb(a,b){this.b=a;this.c=b}
function uT(a,b){var c;c=OT((JT(),b));return vT(a,c,b,false)}
function owb(a){var b,c,d;b=Zqc(Pr(a.b.db,pJc));c=Zqc(Pr(a.c.db,pJc));d=Zqc(Pr(a.d.db,pJc));N2b(a.g,uMc+b+vMc+c+wMc+d+sFc);S2b(a.e,uMc+uT(a.f,b)+vMc+Igb(c)+wMc+uT(a.f,d)+sFc)}
function nwb(a){var b,c,d,e,f,g;d=new x5b;b=NU(d.k,99);d.p[AHc]=5;g=phb(w2);e=new i$b(g);wj(e,new swb(a,g),(Hx(),Hx(),Gx));f=new p7b;f.f[AHc]=3;m7b(f,new W2b("Cet exemple interagit avec l'interface \uFFFDchantillon:"));m7b(f,e);r5b(d,0,0,f);G5b(b,0)[oJc]=2;o5b(d,1,0,'<b>Mod\uFFFDle de message:<\/b>');o5b(d,1,1,"Utilisateur {0} ({1}  postes) a ajout\xE9 un commentaire sur '{2}'");a.b=new Zac;Pac(a.b,(GF(),'\u05EA\u05D5\u05DE\u05E8 \u05D2\u05E8\u05D9\u05DF'));o5b(d,2,0,'<b>Argument {0}:<\/b>');r5b(d,2,1,a.b);a.c=new Zac;Pac(a.c,'16');o5b(d,3,0,'<b>Argument {1}:<\/b>');r5b(d,3,1,a.c);a.d=new Zac;Pac(a.d,'\u05DB\u05DE\u05D4 \u05D7\u05D5\u05DC \u05D9\u05E9 \u05D1\u05D7\u05D5\u05E3?');o5b(d,4,0,'<b>Argument {2}:<\/b>');r5b(d,4,1,a.d);a.g=new U2b;o5b(d,5,0,'<b>Message mis en forme sans BidiFormatter:<\/b>');r5b(d,5,1,a.g);L5b(b,5,0,(L6b(),K6b));a.e=new U2b;o5b(d,6,0,'<b>Message mis en forme avec BidiFormatter:<\/b>');r5b(d,6,1,a.e);L5b(b,6,0,K6b);c=new vwb(a);wj(a.b,c,(ry(),ry(),qy));wj(a.c,c,qy);wj(a.d,c,qy);owb(a);return d}
var wMc="  postes) a ajout\xE9 un commentaire sur '",uMc='Utilisateur ';dfb(650,1,sBc,swb);_.Lc=function twb(a){ihb(this.b,this.c+xMc)};_.b=null;_.c=null;dfb(651,1,dBc,vwb);_.Nc=function wwb(a){owb(this.b)};_.b=null;dfb(652,1,vBc);_.qc=function Awb(){Ihb(this.c,nwb(this.b))};var w2=Mpc(xIc,'BlogMessages'),z2=Kpc(xIc,'CwBidiFormatting$1',650),A2=Kpc(xIc,'CwBidiFormatting$2',651);iCc(Jn)(27);