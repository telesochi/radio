function deg2hms( deg )
{
  deg = new Number( deg );
  /* Add 0.5", so floor will work as round */
  deg += 0.5/(3600);
  var d = Math.floor( deg );
  var m = Math.floor( ( deg - d ) * 60 );
  var s = Math.floor( 60*( ( deg - d ) * 60 - m ) );
  return d + "&#176; " + m + "' " + s + '"';
}


function formatPow( p )
{
  return p.toFixed(2) + 'x';
}


function formatEP( ep )
{
  return ep.toFixed(2) + 'мм';
}


function formatSec( s )
{
  return s.toFixed(2) + '"';
}


function log10( x )
{
  return Math.LOG10E*Math.log( x );
}


function calc( lang )
{
  $("#result").hide();
  $("#err").hide();
  $("#err").removeClass();
  $("#params").hide();
  $("#magnif").hide();
  $("#other").hide();
  $("#p_f").hide();
  $("#razr").hide();
  $("#moon_det").hide();
  $("#m").hide();
  $("#field").hide();
  $("#ep_param").hide();
  $("#ep_magnif").hide();
  $("#ep_fov").hide();
  $(".p_ep").hide();
  $(".help").hide();
  $("#ep_pulp").hide();

  $("#lnk").hide();
  $("#link").hide();

  $("#err").text( "" );
  $("#err").hide();
  $("#err").removeClass();

  var D = new Number( $("input#D_t").val() );
  var F = new Number( $("input#F_t").val() );
  var Fok = new Number( $("input#Fok_t").val() );
  var AFok = new Number( $("input#AFok_t").val() );
  var Fokuser = new Number( $("#fokuser_t").val() );
  var FokuserD = new Number( 0 );
  if( Fokuser == 1.25 )
    FokuserD = 27;
  else if( Fokuser == 2 )
    FokuserD = 45;

  if ( D <= 0 )
  {
    if( lang == "ru" )
      $("#err").text( "Диаметр объектива должен быть больше 0. Пропускаем вычисления с его участием." );
    else if( lang == "en" )
      $("#err").text( "Диаметр объектива должен быть больше 0. Пропускаем вычисления с его участием." );
    $("#err").addClass("warn");
    $("#err").show();
  }

  var h = new String( "" );
  if( D > 0 )
    h += "D=" + D;
  if ( F > 0 )
  {
    if( h.length > 0 )
      h += "&";
    h += "F=" + F;
  }
  if( Fok > 0 )
  {
    if ( h.length > 0 )
      h += "&";
    h += "Fok=" + Fok;
  }
  if( AFok > 0 )
  {
    if ( h.length > 0 )
      h += "&";
    h += "AFok=" + AFok;
  }

  if ( $("#Barlow_b").prop( "checked" ) )
  {
    var BarX = new Number( $("#Barlow_t").val() );
    if( BarX > 0 )
    {
      if ( h.length > 0 )
        h += "&";
      h += "B=" + BarX;
    }
  }
  if( Fokuser > 0 )
  {
    if( h.length > 0 )
      h += "&";
    h += "Fs=" + Fokuser;
  }
  if( h.length > 0 )
  {
    document.location.hash = "#" + h;
    $("#lnk").show();
    $("#lnk_hr").show();
    $("input#lnk_t").val( document.location );
  }

  var Pmax = new Number( 2.0 * D );
  var Praz = new Number( 1.4 * D );
  var Pbig = new Number( D );
  var Ppro = new Number( 0.7 * D );
  var Pmid = new Number( D/2.0 );
  var Pumr = new Number( D/3.0 );
  var Pmin = new Number( D/6.0 );

  var Ff = new Number( 0.0 );
  var Raz = new Number( 0.0 );
  var Dawes = new Number( 0.0 );
  var Moon = new Number( 0.0 );
  if( D > 0 )
  {
    Raz = 140.0/D;
    Dawes = 115.8/D;
    Ff = F/D;
    Moon = 2.0*Raz*3476.0/1865.0;
  }

  var M = new Number( 7.5 + 5.0 * log10( D/10.0 ) );

  var Pok = new Number( 0 );
  if( Fok > 0 )
    Pok = F/Fok;
  var Aok = new Number( 0 );
  var epv = new Number( 0 );
  if( Pok > 0 )
  {
    Aok = AFok/Pok;
    epv = D/Pok;
  }

  if( $("#Barlow_b").prop("checked") )
  {
    var BarX = new Number( $("#Barlow_t").val() );
    if( BarX > 0 )
    {
      Pok = Pok * BarX;
      Aok = Aok / BarX;
      epv = D/Pok;
    }
  }

  var Field = new Number( 0 )
  if( FokuserD > 0 && F > 0 )
    Field = 57.4*FokuserD/F;

  if( D > 0 )
  {
    $("#p1").text( formatPow( Pmax ) );
    $("#p2").text( formatPow( Praz ) );
    $("#p3").text( formatPow( Ppro ) );
    $("#p4").text( formatPow( Pmin ) );
    $("#p_umr").text( formatPow( Pumr ) );
    $("#p_mid").text( formatPow( Pmid ) );
    $("#p_big").text( formatPow( Pbig ) );

    if( F > 0 )
    {
      $("#p1_ep_val").text( formatEP( F/Pmax ) );
      $("#p2_ep_val").text( formatEP( F/Praz ) );
      $("#p3_ep_val").text( formatEP( F/Ppro ) );
      $("#p4_ep_val").text( formatEP( F/Pmin ) );
      $("#p_umr_ep_val").text( formatEP( F/Pumr ) );
      $("#p_mid_ep_val").text( formatEP( F/Pmid ) );
      $("#p_big_ep_val").text( formatEP( F/Pbig ) );
      $(".p_ep").show();
    }

    $("#magnif").show();

    if( F > 0 )
    {
      $("#p_f_val").text( '1/' + Ff.toFixed(2) );
      $("#p_f").show();
    }

    $("#razr_val").text( formatSec( Raz ) );
    $("#razr").show();
    $("#m_val").text( M.toFixed(1) );
    $("#m").show();
    if( lang == "ru" )
      $("#moon_det_val").text( Moon.toFixed(1) + "км" );
    else if( lang == "en" )
      $("#moon_det_val").text( Moon.toFixed(1) + "km" );
    $("#moon_det").show();

    $("#other").show();
    $("#params").show();
  }

  if( F > 0 && Fok > 0 )
  {
    $("#ep_magnif_val").text( formatPow( Pok ) );
    if( AFok > 0 )
    {
      $("#ep_fov_val").html( deg2hms( Aok ) + ' (' + Aok.toFixed(3) + '&#176;)' );
      $("#ep_fov").show();
    }
    $("#ep_magnif").show();
    $("#ep_param").show();
    if( D > 0 )
    {
      $("#ep_pulp_val").text( formatEP( epv ) );
      $("#ep_pulp").show();
    }
  }

  if( F > 0 && Field > 0 )
  {
    $("#field_val").html( deg2hms( Field ) + ' (' + Field.toFixed(3) + '&#176;)' );
    $("#field").show();
  }

  $("#result").show();
}


function parseHash( lang )
{
  var h = new String( document.location.hash.substr( 1 ) );
  if ( h.length > 0 )
  {
    var m = h.split( '&' );
    var s = new String( '' );
    for( var i = 0; i < m.length; i++ )
    {
      s = m[i];
      var vm = s.split( '=' );
      if ( vm.length == 2 )
      {
        if( vm[0] == 'D' )
          $("input#D_t").val( vm[1] );
        if( vm[0] == 'F' )
          $("input#F_t").val( vm[1] );
        if( vm[0] == 'Fok' )
          $("input#Fok_t").val( vm[1] );
        if( vm[0] == 'AFok' )
          $("input#AFok_t").val( vm[1] );
        if( vm[0] == 'Fs' )
          $("#fokuser_t").val( vm[1] );
        if( vm[0] == 'B' )
        {
          $("#Barlow_b").prop( "checked", true );
          $("#Barlow_t").prop( "disabled", false );
          $("#Barlow_t").val( vm[1] );
        }
      }
    }
    calc( lang );
  }
}


function add_ep( lang )
{
  $( "#ep_place" ).append( "<tr><td colspan=\"4\" class=\"frmhead\"><strong>Окуляр:</strong></td></tr>" );
}


function init_ui( lang )
{
  $("#result").hide();
  $("#lnk").hide();
  $("#lnk_hr").hide();
  $("#link").hide();

  $("input.calcbtn").click( function() { calc( lang ); } );

  var delay = 90;

  $("#magnif_h").click( function() { $("#magnif_desc").slideToggle( delay ); } );
  $("#moon_h").click( function() { $("#moon_desc").slideToggle( delay ); } );
  $("#pulp_h").click( function() { $("#pulp_desc").slideToggle( delay ); } );

  $("#m_a").click( function() { $("#m_h").slideToggle( delay ); } );
  $("#field_a").click( function() { $("#field_h").slideToggle( delay ); } );
  $("#razr_a").click( function() { $("#razr_h").slideToggle( delay ); } );
  $("#moon_det_a").click( function() { $("#moon_det_h").slideToggle( delay ); } );
  $("#p_f_a").click( function() { $("#p_f_h").slideToggle( delay ); } );

  $("#p1_a").click( function() { $("#p1_h").slideToggle( delay ); } );
  $("#p2_a").click( function() { $("#p2_h").slideToggle( delay ); } );
  $("#p3_a").click( function() { $("#p3_h").slideToggle( delay ); } );
  $("#p4_a").click( function() { $("#p4_h").slideToggle( delay ); } );
  $("#p_umr_a").click( function() { $("#p_umr_h").slideToggle( delay ); } );
  $("#p_mid_a").click( function() { $("#p_mid_h").slideToggle( delay ); } );
  $("#p_big_a").click( function() { $("#p_big_h").slideToggle( delay ); } );

  $("#lnk").click( function()
  {
    $("#link").slideToggle( delay );
    $("input#lnk_t").val( document.location );
  } );

  $("#Barlow_b").change( function()
  {
    $("#Barlow_t").prop( "disabled", !( $("#Barlow_b").prop( "checked" ) ) );
  } );
  $("#Barlow_b").trigger( "change" );


  $("#add_ep").click( function() { add_ep( lang ) } );


  parseHash();
}
