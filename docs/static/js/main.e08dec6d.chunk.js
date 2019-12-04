(this['webpackJsonpiam-emoyano'] = this['webpackJsonpiam-emoyano'] || []).push([
  [0],
  {
    3: function(e, a, t) {
      e.exports = t.p + 'static/media/profilepic.d34f8b70.jpg';
    },
    4: function(e, a, t) {
      e.exports = t(9);
    },
    9: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        l = t.n(n),
        c = t(2),
        r = function(e) {
          return e.social.map(function(e) {
            return l.a.createElement(
              'li',
              { key: e.name },
              l.a.createElement(
                'a',
                { href: e.url },
                l.a.createElement('i', { className: e.className })
              )
            );
          });
        },
        s = function(e) {
          return l.a.createElement(
            'header',
            { id: 'home' },
            l.a.createElement(
              'nav',
              { id: 'nav-wrap' },
              l.a.createElement(
                'a',
                {
                  className: 'mobile-btn',
                  href: '#nav-wrap',
                  title: 'Show navigation',
                },
                'Show navigation'
              ),
              l.a.createElement(
                'a',
                {
                  className: 'mobile-btn',
                  href: '#home',
                  title: 'Hide navigation',
                },
                'Hide navigation'
              ),
              l.a.createElement(
                'ul',
                { id: 'nav', className: 'nav' },
                l.a.createElement(
                  'li',
                  { className: 'current' },
                  l.a.createElement(
                    'a',
                    { className: 'smoothscroll', href: '#home' },
                    'Home'
                  )
                ),
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    'a',
                    { className: 'smoothscroll', href: '#about' },
                    'About'
                  )
                ),
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    'a',
                    { className: 'smoothscroll', href: '#resume' },
                    'Resume'
                  )
                ),
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    'a',
                    { className: 'smoothscroll', href: '#portfolio' },
                    'Works'
                  )
                ),
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    'a',
                    { className: 'smoothscroll', href: '#testimonials' },
                    'Testimonials'
                  )
                ),
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    'a',
                    { className: 'smoothscroll', href: '#contact' },
                    'Contact'
                  )
                )
              )
            ),
            l.a.createElement(
              'div',
              { className: 'row banner' },
              l.a.createElement(
                'div',
                { className: 'banner-text' },
                l.a.createElement(
                  'h1',
                  { className: 'responsive-headline' },
                  "I'm ".concat(e.data.name, '.')
                ),
                l.a.createElement(
                  'h3',
                  null,
                  "I'm a ",
                  e.data.city,
                  ' based ',
                  l.a.createElement('span', null, e.data.occupation),
                  '.',
                  ' ',
                  e.data.description,
                  '.'
                ),
                l.a.createElement('hr', null),
                l.a.createElement('ul', { className: 'social' }, r(e.data))
              )
            ),
            l.a.createElement(
              'p',
              { className: 'scrolldown' },
              l.a.createElement(
                'a',
                { className: 'smoothscroll', href: '#about' },
                l.a.createElement('i', { className: 'icon-down-circle' })
              )
            )
          );
        },
        m = function(e) {
          return l.a.createElement(
            'footer',
            null,
            l.a.createElement(
              'div',
              { className: 'row' },
              l.a.createElement(
                'div',
                { className: 'twelve columns' },
                l.a.createElement(
                  'ul',
                  { className: 'social-links' },
                  r(e.data)
                ),
                l.a.createElement(
                  'ul',
                  { className: 'copyright' },
                  l.a.createElement(
                    'li',
                    null,
                    '\xa9 Copyright 2017 Tim Baker'
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    'Design by',
                    ' ',
                    l.a.createElement(
                      'a',
                      {
                        title: 'Styleshout',
                        href: 'http://www.styleshout.com/',
                      },
                      'Styleshout'
                    )
                  )
                )
              ),
              l.a.createElement(
                'div',
                { id: 'go-top' },
                l.a.createElement(
                  'a',
                  {
                    className: 'smoothscroll',
                    title: 'Back to Top',
                    href: '#home',
                  },
                  l.a.createElement('i', { className: 'icon-up-open' })
                )
              )
            )
          );
        },
        o = t(3),
        i = t.n(o),
        u = function(e) {
          return l.a.createElement(
            'section',
            { id: 'about' },
            l.a.createElement(
              'div',
              { className: 'row' },
              l.a.createElement(
                'div',
                { className: 'three columns' },
                l.a.createElement('img', {
                  className: 'profile-pic',
                  src: i.a,
                  alt: 'Ernesto Moyano Profile Pic',
                })
              ),
              l.a.createElement(
                'div',
                { className: 'nine columns main-col' },
                l.a.createElement('h2', null, 'About Me'),
                l.a.createElement('p', null, e.data.bio),
                l.a.createElement(
                  'div',
                  { className: 'row' },
                  l.a.createElement(
                    'div',
                    { className: 'columns contact-details' },
                    l.a.createElement('h2', null, 'Contact Details'),
                    l.a.createElement(
                      'p',
                      { className: 'address' },
                      l.a.createElement('span', null, e.data.name),
                      l.a.createElement('br', null),
                      l.a.createElement(
                        'span',
                        null,
                        e.data.address.street,
                        l.a.createElement('br', null),
                        e.data.address.city,
                        ' ',
                        e.data.address.state,
                        ',',
                        ' ',
                        e.data.address.zip
                      ),
                      l.a.createElement('br', null),
                      l.a.createElement('span', null, e.data.phone),
                      l.a.createElement('br', null),
                      l.a.createElement('span', null, e.data.email)
                    )
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'columns download' },
                    l.a.createElement(
                      'p',
                      null,
                      l.a.createElement(
                        'a',
                        { href: e.data.resumeDownload, className: 'button' },
                        l.a.createElement('i', { className: 'fa fa-download' }),
                        'Download Resume'
                      )
                    )
                  )
                )
              )
            )
          );
        },
        d = function(e) {
          return l.a.createElement(
            'section',
            { id: 'resume' },
            l.a.createElement(
              'div',
              { className: 'row education' },
              l.a.createElement(
                'div',
                { className: 'three columns header-col' },
                l.a.createElement(
                  'h1',
                  null,
                  l.a.createElement('span', null, 'Education')
                )
              ),
              l.a.createElement(
                'div',
                { className: 'nine columns main-col' },
                l.a.createElement(
                  'div',
                  { className: 'row item' },
                  l.a.createElement(
                    'div',
                    { className: 'twelve columns' },
                    e.data.education.map(function(e) {
                      return l.a.createElement(
                        'div',
                        { key: e.school },
                        l.a.createElement('h3', null, e.school),
                        l.a.createElement(
                          'p',
                          { className: 'info' },
                          e.degree,
                          ' ',
                          l.a.createElement('span', null, '\u2022'),
                          l.a.createElement(
                            'em',
                            { className: 'date' },
                            e.graduated
                          )
                        ),
                        l.a.createElement('p', null, e.description)
                      );
                    })
                  )
                )
              )
            ),
            l.a.createElement(
              'div',
              { className: 'row work' },
              l.a.createElement(
                'div',
                { className: 'three columns header-col' },
                l.a.createElement(
                  'h1',
                  null,
                  l.a.createElement('span', null, 'Work')
                )
              ),
              l.a.createElement(
                'div',
                { className: 'nine columns main-col' },
                e.data.work.map(function(e) {
                  return l.a.createElement(
                    'div',
                    { key: e.company },
                    l.a.createElement('h3', null, e.company),
                    l.a.createElement(
                      'p',
                      { className: 'info' },
                      e.title,
                      l.a.createElement('span', null, '\u2022'),
                      ' ',
                      l.a.createElement('em', { className: 'date' }, e.years)
                    ),
                    l.a.createElement('p', null, e.description)
                  );
                })
              )
            ),
            l.a.createElement(
              'div',
              { className: 'row skill' },
              l.a.createElement(
                'div',
                { className: 'three columns header-col' },
                l.a.createElement(
                  'h1',
                  null,
                  l.a.createElement('span', null, 'Skills')
                )
              ),
              l.a.createElement(
                'div',
                { className: 'nine columns main-col' },
                l.a.createElement('p', null, e.data.skillmessage),
                l.a.createElement(
                  'div',
                  { className: 'bars' },
                  l.a.createElement(
                    'ul',
                    { className: 'skills' },
                    e.data.skills.map(function(e) {
                      var a = 'bar-expand ' + e.name.toLowerCase();
                      return l.a.createElement(
                        'li',
                        { key: e.name },
                        l.a.createElement('span', {
                          style: { width: e.level },
                          className: a,
                        }),
                        l.a.createElement('em', null, e.name)
                      );
                    })
                  )
                )
              )
            )
          );
        },
        E = function(e) {
          var a = function(e) {
            console.log('Change');
          };
          return l.a.createElement(
            'section',
            { id: 'contact' },
            l.a.createElement(
              'div',
              { className: 'row section-head' },
              l.a.createElement(
                'div',
                { className: 'two columns header-col' },
                l.a.createElement(
                  'h1',
                  null,
                  l.a.createElement('span', null, 'Get In Touch.')
                )
              ),
              l.a.createElement(
                'div',
                { className: 'ten columns' },
                l.a.createElement('p', { className: 'lead' }, e.data.message)
              )
            ),
            l.a.createElement(
              'div',
              { className: 'row' },
              l.a.createElement(
                'div',
                { className: 'eight columns' },
                l.a.createElement(
                  'form',
                  {
                    action: '',
                    method: 'post',
                    id: 'contactForm',
                    name: 'contactForm',
                  },
                  l.a.createElement(
                    'fieldset',
                    null,
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        'label',
                        { htmlFor: 'contactName' },
                        'Name ',
                        l.a.createElement(
                          'span',
                          { className: 'required' },
                          '*'
                        )
                      ),
                      l.a.createElement('input', {
                        type: 'text',
                        defaultValue: '',
                        size: '35',
                        id: 'contactName',
                        name: 'contactName',
                        onChange: a,
                      })
                    ),
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        'label',
                        { htmlFor: 'contactEmail' },
                        'Email ',
                        l.a.createElement(
                          'span',
                          { className: 'required' },
                          '*'
                        )
                      ),
                      l.a.createElement('input', {
                        type: 'text',
                        defaultValue: '',
                        size: '35',
                        id: 'contactEmail',
                        name: 'contactEmail',
                        onChange: a,
                      })
                    ),
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        'label',
                        { htmlFor: 'contactSubject' },
                        'Subject'
                      ),
                      l.a.createElement('input', {
                        type: 'text',
                        defaultValue: '',
                        size: '35',
                        id: 'contactSubject',
                        name: 'contactSubject',
                        onChange: a,
                      })
                    ),
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        'label',
                        { htmlFor: 'contactMessage' },
                        'Message ',
                        l.a.createElement(
                          'span',
                          { className: 'required' },
                          '*'
                        )
                      ),
                      l.a.createElement('textarea', {
                        cols: '50',
                        rows: '15',
                        id: 'contactMessage',
                        name: 'contactMessage',
                      })
                    ),
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        'button',
                        { className: 'submit' },
                        'Submit'
                      ),
                      l.a.createElement(
                        'span',
                        { id: 'image-loader' },
                        l.a.createElement('img', {
                          alt: '',
                          src: 'images/loader.gif',
                        })
                      )
                    )
                  )
                ),
                l.a.createElement(
                  'div',
                  { id: 'message-warning' },
                  ' Error boy'
                ),
                l.a.createElement(
                  'div',
                  { id: 'message-success' },
                  l.a.createElement('i', { className: 'fa fa-check' }),
                  'Your message was sent, thank you!',
                  l.a.createElement('br', null)
                )
              ),
              l.a.createElement(
                'aside',
                { className: 'four columns footer-widgets' },
                l.a.createElement(
                  'div',
                  { className: 'widget widget_contact' },
                  l.a.createElement('h4', null, 'Address and Phone'),
                  l.a.createElement(
                    'p',
                    { className: 'address' },
                    e.data.name,
                    l.a.createElement('br', null),
                    e.data.street,
                    ' ',
                    l.a.createElement('br', null),
                    e.data.city,
                    ', ',
                    e.data.state,
                    ' ',
                    e.data.zip,
                    l.a.createElement('br', null),
                    l.a.createElement('span', null, e.data.phone)
                  )
                ),
                l.a.createElement(
                  'div',
                  { className: 'widget widget_tweets' },
                  l.a.createElement(
                    'h4',
                    { className: 'widget-title' },
                    'Latest Tweets'
                  ),
                  l.a.createElement(
                    'ul',
                    { id: 'twitter' },
                    l.a.createElement(
                      'li',
                      null,
                      l.a.createElement(
                        'span',
                        null,
                        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum"
                      ),
                      l.a.createElement(
                        'b',
                        null,
                        l.a.createElement('a', { href: '/' }, '2 Days Ago')
                      )
                    ),
                    l.a.createElement(
                      'li',
                      null,
                      l.a.createElement(
                        'span',
                        null,
                        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi',
                        l.a.createElement(
                          'a',
                          { href: '/' },
                          'http://t.co/CGIrdxIlI3'
                        )
                      ),
                      l.a.createElement(
                        'b',
                        null,
                        l.a.createElement('a', { href: '/' }, '3 Days Ago')
                      )
                    )
                  )
                )
              )
            )
          );
        },
        p = function(e) {
          return l.a.createElement(
            'section',
            { id: 'testimonials' },
            l.a.createElement(
              'div',
              { className: 'text-container' },
              l.a.createElement(
                'div',
                { className: 'row' },
                l.a.createElement(
                  'div',
                  { className: 'two columns header-col' },
                  l.a.createElement(
                    'h1',
                    null,
                    l.a.createElement('span', null, 'Client Testimonials')
                  )
                ),
                l.a.createElement(
                  'div',
                  { className: 'ten columns flex-container' },
                  l.a.createElement(
                    'ul',
                    { className: 'slides' },
                    e.data.testimonials.map(function(e) {
                      return l.a.createElement(
                        'li',
                        { key: e.user },
                        l.a.createElement(
                          'blockquote',
                          null,
                          l.a.createElement('p', null, e.text),
                          l.a.createElement('cite', null, e.user)
                        )
                      );
                    })
                  )
                )
              )
            )
          );
        },
        X = function(e) {
          return l.a.createElement(
            'section',
            { id: 'portfolio' },
            l.a.createElement(
              'div',
              { className: 'row' },
              l.a.createElement(
                'div',
                { className: 'twelve columns collapsed' },
                l.a.createElement('h1', null, 'Check Out Some of My Works.'),
                l.a.createElement(
                  'div',
                  {
                    id: 'portfolio-wrapper',
                    className: 'bgrid-quarters s-bgrid-thirds cf',
                  },
                  e.data.projects.map(function(e) {
                    var a = 'images/portfolio/' + e.image;
                    return l.a.createElement(
                      'div',
                      { key: e.title, className: 'columns portfolio-item' },
                      l.a.createElement(
                        'div',
                        { className: 'item-wrap' },
                        l.a.createElement(
                          'a',
                          { href: e.url, title: e.title },
                          l.a.createElement('img', { alt: e.title, src: a }),
                          l.a.createElement(
                            'div',
                            { className: 'overlay' },
                            l.a.createElement(
                              'div',
                              { className: 'portfolio-item-meta' },
                              l.a.createElement('h5', null, e.title),
                              l.a.createElement('p', null, e.category)
                            )
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'link-icon' },
                            l.a.createElement('i', { className: 'fa fa-link' })
                          )
                        )
                      )
                    );
                  })
                )
              )
            )
          );
        },
        h = {
          main: {
            name: 'Ernesto Moyano',
            occupation: 'Software Engineer',
            description: 'Intrepid entrepreneur looking for challenges',
            image: 'profilepic.jpg',
            bio: 'Always open to new challenges',
            contactmessage:
              "Don't hesitate to contact me if you have any quations.",
            email: 'efmoyano@tufix.com.ar',
            phone: '(+54) 381-6722929',
            address: {
              street: 'My Street',
              city: 'San Miguel de Tucum\xe1n',
              state: 'Tucum\xe1n',
              zip: '4000',
            },
            website: 'https://www.tufix.com.ar',
            resumedownload: 'https://tufix.com.ar',
            social: [
              {
                name: 'facebook',
                url: 'https://www.facebook.com/ef.moyano',
                className: 'fa fa-facebook',
              },
              {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/ernesto-moyano-15b64927/',
                className: 'fa fa-linkedin',
              },
              {
                name: 'instagram',
                url: 'http://instagram.com/efmoyano',
                className: 'fa fa-instagram',
              },
              {
                name: 'github',
                url: 'https://github.com/efmoyano',
                className: 'fa fa-github',
              },
              {
                name: 'skype',
                url: 'http://skype.com',
                className: 'fa fa-skype',
              },
            ],
          },
          resume: {
            skillmessage:
              'Here you can create a short write-up of your skills to show off to employers',
            education: [
              {
                school: 'Universidad del Norte Santo Tom\xe1s de Aquino',
                degree: 'Ingeniero Inform\xe1tico',
                graduated: 'Abril 2013',
                description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              },
              {
                school: 'Instituto San Miguel',
                degree: 'What did you study 101',
                graduated: 'Diciembre 2007',
                description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              },
            ],
            work: [
              {
                company: 'Sovos Latam',
                title: 'Certified Scrum Master',
                years: 'Abril 2014 - Presente',
                description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              },
              {
                company: 'Tufix Systems',
                title: 'Agile Developer',
                years: 'Marzo 2007 - Presente',
                description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              },
            ],
            skills: [
              { name: 'Git', level: '90%' },
              { name: 'React.js', level: '80%' },
              { name: 'Java', level: '30%' },
              { name: 'Arduino', level: '60%' },
              { name: 'NodeJs', level: '80%' },
              { name: 'Scrum', level: '95%' },
            ],
          },
          portfolio: {
            projects: [
              {
                title: 'Tufix Page',
                category: 'Tufix Corporate Page',
                image: 'tufix-webpage.png',
                url: 'https://www.tufix.com.ar',
              },
            ],
          },
          testimonials: {
            testimonials: [
              { text: 'XXXXXXXXXXXX', user: 'SOMEONE' },
              { text: 'YYYYYY', user: 'SOMEONE22' },
            ],
          },
        },
        f = function() {
          return l.a.createElement(
            'div',
            { className: 'App' },
            l.a.createElement(s, { data: h.main }),
            l.a.createElement(u, { data: h.main }),
            l.a.createElement(d, { data: h.resume }),
            l.a.createElement(X, { data: h.portfolio }),
            l.a.createElement(p, { data: h.testimonials }),
            l.a.createElement(E, { data: h.main }),
            l.a.createElement(m, { data: h.main })
          );
        },
        v = Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function N(e) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var a = e.installing;
              a.onstatechange = function() {
                'installed' === a.state &&
                  (navigator.serviceWorker.controller
                    ? console.log('New content is available; please refresh.')
                    : console.log('Content is cached for offline use.'));
              };
            };
          })
          .catch(function(e) {
            console.error('Error during service worker registration:', e);
          });
      }
      var g = document.getElementById('root');
      Object(c.render)(l.a.createElement(f, null), g),
        (function() {
          if ('serviceWorker' in navigator) {
            if (new URL('', window.location).origin !== window.location.origin)
              return;
            window.addEventListener('load', function() {
              var e = ''.concat('', '/service-worker.js');
              v
                ? (function(e) {
                    fetch(e)
                      .then(function(a) {
                        404 === a.status ||
                        -1 ===
                          a.headers.get('content-type').indexOf('javascript')
                          ? navigator.serviceWorker.ready.then(function(e) {
                              e.unregister().then(function() {
                                window.location.reload();
                              });
                            })
                          : N(e);
                      })
                      .catch(function() {
                        console.log(
                          'No internet connection found. App is running in offline mode.'
                        );
                      });
                  })(e)
                : N(e);
            });
          }
        })();
    },
  },
  [[4, 1, 2]],
]);
//# sourceMappingURL=main.e08dec6d.chunk.js.map
