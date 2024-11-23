from setuptools import setup, find_packages

requirements = """
pip>=24.3.1
fastapi>=0.115.5
"""

setup(
        name="dilemma_api",
        version="0.0.1",
        author="gravlax",
        author_email="alexgravx@gmail.com",
        url="",
        description="An api to simulate prisonner dilemma iterations, with multiple strategies",
        packages=find_packages(),
        readme = "README.md",
        install_requires = ["numpy >= 2.1.3"],
        python_requires=">=3.10.12",
        classifiers=[
        "Programming Language :: Python :: 3.10",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        ],
        # all functions @cli.command() decorated in transmute_pkg/cli.py
        entry_points={
            "console_scripts": [
                "dilemma = dilemma.cli:dilamma",
            ]
        },
)
