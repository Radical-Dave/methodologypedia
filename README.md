# MethodologyPedia

The Encyclopedia of Software Development Methodologies That Probably Shouldn't Exist.

## About

Welcome to **MethodologyPedia**, the definitive encyclopedia of software development methodologies that probably shouldn't exist.

This site started as a joke back in 2013 as a simple ASP.NET MVC website, and has evolved into a diverse collection of satirical methodologies shared by the software development community. From TDD (Tea Driven Development) to ZDD (Zzzzz Driven Development), we celebrate the humorous side of programming culture.

Please do not use any of these methodologies in production work. We are not responsible for any failed projects resulting from the serious application of these methodologies.

## Tech Stack

- **Static Site Generator:** [Jekyll](https://jekyllrb.com)
- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com)
- **Multi-language:** [Jekyll Polyglot](https://github.com/unpoly/polyglot) (EN, EN-GB, AR, ES)
- **Deployment:** [GitHub Pages](https://pages.github.com) via GitHub Actions
- **Forms:** [Web3Forms](https://web3forms.com)

## Languages

| Flag | Code | URL | Description |
|------|------|-----|-------------|
| 🇺🇸 | en | `/` | English (US) - Default |
| 🇬🇧 | en-gb | `/en-gb/` | English (UK) |
| 🇸🇦 | ar | `/ar/` | Arabic (RTL) |
| 🇪🇸 | es | `/es/` | Spanish |

## Local Development

### Prerequisites

- Ruby 3.3+
- Bundler
- Docker (optional)

### Using Docker

```bash
docker compose up -d
```

Site will be available at `http://localhost:4000`

### Without Docker

```bash
bundle install
bundle exec jekyll serve
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Submitting a Methodology

Have a satirical methodology that deserves to be in the encyclopedia? Visit our [Submit page](https://methodologypedia.com/submit/) to share it with the world!

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with ❤️ by [Radical Dave](https://radicaldave.com)
- Inspired by the software development community's love of acronyms and processes
